import { makeBooking } from '../../store/booking';
import './ListingPage.css'
const { useEffect, useState } = require("react");
const { useSelector, useDispatch } = require("react-redux");
const { useParams } = require("react-router-dom");
const { populatePlaces } = require("../../store/place");


export default function ListingPage() {
    const dispatch = useDispatch()
    const placeId = useParams();
    const sessionUser = useSelector(state => state.session.user)
    let places = []
    places = useSelector(state => state.place.place)
    let place = {}
    let user = [];

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    useEffect(() => {
        dispatch(populatePlaces())
    }, [dispatch])

    if (places) {
        place = places.find(place => place.id === parseInt(placeId.id))

    }

    const createBooking = (e) => {
        e.preventDefault();
        console.log(startDate, endDate)
      return dispatch(makeBooking({ placeId: place.id, userId: sessionUser.id, startDate, endDate} ))
    }



    if (places) {
        return (
            <div id="listing-page">
                <div id='title-top'>
                    <div id='details'>
                        <h1 className='title'>{place.name}</h1>
                        <div id='location'>
                            <p className='state'>{place.state}</p>
                            <p className='country'>{place.country}</p>
                        </div>
                    </div>
                    <img id='listing-img' src={place.image}></img>
                </div>
                <div id='lower-section'>
                    <p id='description'>{place.description}</p>
                    <form onSubmit={createBooking} id='bookit'>
                        <div id='price-list'>
                            <p id='price-page'>{`$${place.price}`}</p>
                            <p id='per-night'> / night</p>
                        </div>
                        <label>Start Date</label>
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
    } else return <h1>Not rendering</h1>
}
