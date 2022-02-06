import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, Link } from "react-router-dom"
import { populatePlaces } from "../../store/place"
import EditHostForm from "../EditHostForm"
import './HomePage.css'


export default function HomePage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const places = useSelector((state) => state.place.place)


    useEffect(() => {
        dispatch(populatePlaces())

        console.log('happened')
    }, [dispatch])





    if (!sessionUser) return <Redirect to='/signup' />
    return (
        <>
            <div id="home-page-welcome">
                <h1>Welcome to GroundNbN!</h1>
                <p id="little-text">Find a spot to stay or host your own place for others</p>
                <Link id='post-place' to='/host'>Host</Link>
            </div>
            <div id="places">
                {places && places.map(place => (
                    <div key={place.id} className="listing-box">
                        <img className="listing-photos" key={place.image} src={place.image}></img>
                        <h2 key={place.name}>{place.name}</h2>
                        {sessionUser.id === place.userId &&
                        <div className="owner">
                        <Link to={`places/${place.id}/edit`}>Edit</Link>
                        <p >Delete</p>
                        </div>
                        }
                        <p id="price">{`$${place.price}/ night`}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
