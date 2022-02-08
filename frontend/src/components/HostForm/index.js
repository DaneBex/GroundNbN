import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { makeListing } from '../../store/place'
import './HostForm.css'

export default function HostForm() {
    const userId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch()
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const history = useHistory()

    const submission = e => {
        e.preventDefault()
        console.log(userId)

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

        dispatch(makeListing(vals))
        return history.push('/')
    }


    return (
        <form
        onSubmit={submission}
        id="hostform">
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
                <label>Place Name</label>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'></input>
            </div>
            <div className='divider'>
                <label>Price</label>
                <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type='number'></input>
            </div>
            <div className='divider'>
                <label>Home Image</label>
                <textarea
                value={image}
                onChange={e => setImage(e.target.value)}
                placeholder='image url here'></textarea>
                <div>
                <label>Description</label>
                <textarea
                id='description-box'
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder='Description Here'></textarea>
                </div>
            </div>
            <button id='submit-form'>Post</button>
        </form>
    )
}
