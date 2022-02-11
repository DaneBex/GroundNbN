import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { makeListing } from '../../store/place'
import './HostForm.css'

export default function HostForm() {
    const userId = useSelector(state => state.session.user?.id)
    const dispatch = useDispatch()
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const submission = e => {
        e.preventDefault()
        let newErrors = [];

        if (!address || !city || !state || !country || !name || !price || !image || !description) newErrors.push('All fields are required to be entered')

        const vals = {
            userId,
            address,
            city,
            state,
            country,
            name,
            price,
            image,
            description
        }

        if (newErrors.length === 0) {
        dispatch(makeListing(vals))
        return history.push('/')
        } else setErrors(newErrors)
    }


    return (
        <form
        onSubmit={submission}
        id="hostform">
            <h1 id='form-for'>{`Form For: ${name}`}</h1>
            <ul id='hosting-form-errors'>
                {errors.map(error => (
                    <li className='hosting-form-error' key={error}>{error}</li>
                ))}
            </ul>
            <div className='divider'>
                <label>Place Name</label>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'></input>
            </div>
            <div className='divider'>
                <label>Address</label>
                <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type='text'></input>
            </div>
            <div className='divider'>
                <label>City</label>
                <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type='text'></input>
            </div>
            <div className='divider'>
                <label>State</label>
                <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                type='text'></input>
            </div>
            <div className='divider'>
                <label>Country</label>
                <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                type='text'></input>
            </div>
            <div className='divider'>
                <label>Price</label>
                <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type='number'></input>
            </div>
            <div id='house-image-host' className='divider'>
                <label>Home Image</label>
                <textarea
                value={image}
                onChange={e => setImage(e.target.value)}
                placeholder='image link here'></textarea>
                 </div>
                <div>
                <label>Description</label>
                <textarea
                id='description-box'
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder='Description Here'></textarea>
                </div>

            <button id='submit-form'>Post</button>
        </form>
    )
}
