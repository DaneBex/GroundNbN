import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import { editListing, makeListing, populatePlaces } from '../../store/place'
import './EditHostForm.css'



export default function EditHostForm() {
    const dispatch = useDispatch()
    let places = {}
    places = useSelector(state => state.place.place)
    let place = {}

    useEffect(() => {
       dispatch(populatePlaces())
    }, [dispatch])

    const placeId = useParams()

    if (places) {
        place = places.find(place => place.id === parseInt(placeId.id))
    }

    console.log(place)


    const userId = useSelector(state => state.session.user.id)
    const [address, setAddress] = useState(place.address)
    const [city, setCity] = useState(place.city)
    const [state, setState] = useState(place.state)
    const [country, setCountry] = useState(place.country)
    const [name, setName] = useState(place.name)
    const [price, setPrice] = useState(place.price)
    const [image, setImage] = useState(place.image)

    const submission = e => {
        e.preventDefault()

        const vals = {
            userId,
            address,
            city,
            state,
            country,
            name,
            price,
            image
        }

        dispatch(editListing(place.id, vals))
        console.log('redirecting')
        return <Redirect to='/' />
    }

    if (places) {
    return (
        <form
        onSubmit={submission}
        id="hostform">
            <h1 id='edit-title'>Edit {place.name}</h1>
            <div className='divider'>
                <label>Address</label>
                <input
                value={address}
                placeholder={address}
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
            </div>
            <button id='submit-form'>Post</button>
        </form>
    )
    } else return <h1>Not rendered</h1>
}
