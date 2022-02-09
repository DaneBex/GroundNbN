import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css'

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    const demoUser = e => {
        return dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' }))
    }

    return (
        <div id="signup-page-background">
            <img id="signup-page-image" src="https://wallpapercave.com/wp/wp3604632.jpg"></img>
            <form onSubmit={handleSubmit} id="signup-form">
                <h1 id="sign-up-title">Find where to stay on GroundNbN</h1>
                <p id="sign-up-ptext">Unearth entire estates and private homes for any trip</p>
                <ul id="signup-errors">
                    {errors.map((error, idx) => <li className="signup-error" key={idx}>{error}</li>)}
                </ul>
                <div className="divider">
                    <label>
                        Email
                    </label>
                    <input className="input-bar"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                </div>
                <div className="divider">
                    <label>
                        Username
                    </label>
                    <input className="input-bar"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                </div>
                <div className="divider">
                    <label>
                        Password
                    </label>
                    <input className="input-bar"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                </div>
                <div className="divider">
                    <label>
                        Confirm Password
                    </label>
                    <input className="input-bar"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                </div>
                <button
                    id="signup-button"
                    type="submit">Continue</button>
                <p
                    onClick={demoUser}
                    className="demo-user">Demo User</p>
            </form >
        </div>
    );
}

export default SignupFormPage;
