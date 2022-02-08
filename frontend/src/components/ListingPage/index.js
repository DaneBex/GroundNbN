import { makeBooking } from '../../store/booking';
import { populateUsers } from '../../store/user';
import './ListingPage.css'
import { deleteListing } from '../../store/place';
const { useEffect, useState } = require("react");
const { useSelector, useDispatch } = require("react-redux");
const { useParams, useHistory } = require("react-router-dom");
const { populatePlaces } = require("../../store/place");


export default function ListingPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams();
    const usersObj = useSelector(state => state.user)
    const bookingsObj = useSelector(state => state.booking)
    const users = Object.values(usersObj)
    const bookings = Object.values(bookingsObj)
    const sessionUser = useSelector(state => state.session.user)
    let place = useSelector(state => state.place[id])
    let PossibleDelete = () => null

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [errors, setErrors] = useState([])


    if (users && place) {
        users.forEach(user => {
            if (place?.userId === user.id) {
                place.ownerName = user.username
            }
        })
    }

    useEffect(() => {
        dispatch(populateUsers())
    }, [dispatch])


    const createBooking = (e) => {
        let newErrors = []
        console.log(startDate, endDate)
        e.preventDefault();
        if (!startDate || !endDate) newErrors.push('Dates are required')
        if (Date.parse(new Date()) > Date.parse(startDate)) {
            newErrors.push('Starting date must be tomorrow or later')
        }
        if (Date.parse(endDate) <= Date.parse(startDate)) {
            newErrors.push('Ending date must be after starting date')
        }
        bookings.forEach(booking => {
            if (place.id === booking.placeId && ((Date.parse(new Date(startDate)) >= Date.parse(new Date(booking.startDate))) && Date.parse(new Date(startDate)) < Date.parse(new Date(booking.endDate))) || (Date.parse(new Date(endDate)) > Date.parse(new Date(booking.startDate)) && Date.parse(new Date(endDate)) < Date.parse(new Date(booking.endDate)))) {
                newErrors.push('Place is already booked at this time')
            }
        })
        if (newErrors.length === 0) {
            dispatch(makeBooking({ placeId: place.id, userId: sessionUser.id, startDate, endDate }))
            return history.push(`/bookings/${sessionUser.id}`)
        }
        setErrors(newErrors)
    }


    const deleteBooking = e => {
        dispatch(deleteListing(place.id))
        return history.push('/')
    }

    if (sessionUser.id === place?.userId) {
        console.log('myPlace')
        PossibleDelete = () => {
            return (
                <div id='delete-div'>
                    <p onClick={() => deleteBooking()} id='delete-listingPage'>Delete Your Listing</p>
                    <i onClick={() => deleteBooking()} class="far fa-trash-alt"></i>
                </div>
            )
        }
    }

    return (
        <div id="listing-page">
            <div id='title-top'>
                <div id='details'>
                    <div id='title-details'>
                        <h1 className='title'>{place?.name}</h1>
                        <h2 className='owner-listing'>{`--Posted By: ${place?.ownerName}`}</h2>
                    </div>
                    <div id='location'>
                        <p className='state'>{place?.state}</p>
                        <p className='country'>{place?.country}</p>
                    </div>
                    {PossibleDelete && <PossibleDelete />}
                </div>
                <img id='listing-img' src={place?.image}></img>
            </div>
            <div id='lower-section'>
                <p id='description'>{place?.description}</p>
                <form onSubmit={createBooking} id='bookit'>
                    <div id='price-list'>
                        <p id='price-page'>{`$${place?.price}`}</p>
                        <p id='per-night'> / night</p>
                    </div>
                    <ul id='booking-errors'>
                        {errors.map(error => <li key={error} className='booking-error'>{error}</li>
                        )}
                    </ul>
                    <label id='startdate-label'>Start Date</label>
                    <input
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        type='date'></input>
                    <label>End Date</label>
                    <input
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                        type='date'></input>
                    <button id='book-button'>Book</button>
                </form>
            </div>
        </div>
    )
}
