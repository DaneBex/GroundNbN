import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { editListing, makeListing, populatePlaces } from '../../store/place'
import './EditHostForm.css'



export default function EditHostForm() {
    const dispatch = useDispatch()
    const { id } = useParams()
    let place = useSelector(state => state.place[id])
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    let userId = '';

    useEffect(() => {
        dispatch(populatePlaces())

        console.log('happened')
    }, [dispatch])

    if (sessionUser) {
        userId = sessionUser.id
    }

    const [address, setAddress] = useState(place?.address)
    const [city, setCity] = useState(place?.city)
    const [state, setState] = useState(place?.state)
    const [country, setCountry] = useState(place?.country)
    const [name, setName] = useState(place?.name)
    const [price, setPrice] = useState(place?.price)
    const [image, setImage] = useState(place?.image)

    // if (place) {
    //     setAddress(place.address)
    //     setCity(place.address)
    //     setState(place.state)
    //     setCountry(place.country)
    //     setName(place.name)
    //     setPrice(place.price)
    //     setImage(place.image)
    //        return
    // }

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
        return history.push(`/places/${place.id}`)
    }

    // if (!sessionUser) return history.push('/signup')

    return (
        <form
            onSubmit={submission}
            id="hostform">
            <h1 id='edit-title'>Edit {place?.name}</h1>
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
}
