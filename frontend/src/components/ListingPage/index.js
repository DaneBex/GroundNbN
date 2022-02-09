import { makeBooking } from '../../store/booking';
import { populateUsers } from '../../store/user';
import './ListingPage.css'
import { deleteListing } from '../../store/place';
import { makeReview, populateReviews, removeReviewFunc } from '../../store/review';
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
    const reviewsObj = useSelector(state => state.review)
    const users = Object.values(usersObj)
    const bookings = Object.values(bookingsObj)
    const reviews = Object.values(reviewsObj)
    const sessionUser = useSelector(state => state.session.user)
    let place = useSelector(state => state.place[id])
    let PossibleDelete = () => null
    const placeReviews = reviews.filter(review => review.placeId === place.id)
    placeReviews.forEach(review => {
        users.forEach(user => {
            if (user.id === review.userId) review.userName = user.username
        })
    })

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [bookingErrors, setErrors] = useState([])
    const [review, setReview] = useState('')
    const [reviewErrors, setReviewErrors] = useState([])


    if (users && place) {
        users.forEach(user => {
            if (place?.userId === user.id) {
                place.ownerName = user.username
            }
        })
    }

    useEffect(() => {
        dispatch(populateReviews())
        dispatch(populateUsers())
    }, [dispatch])


    const createBooking = (e) => {
        let newErrors = []
        console.log(startDate, endDate)
        e.preventDefault();
        if (!startDate || !endDate) newErrors.push('Dates are required')
        if (Date.parse(new Date()) > Date.parse(startDate)) {
            newErrors.push('Start Date too Early')
        }
        if (Date.parse(endDate) <= Date.parse(startDate)) {
            newErrors.push('Ending date must be after starting date')
        }
        bookings.forEach(booking => {
            if (place.id === booking.placeId && ((Date.parse(new Date(startDate)) >= Date.parse(new Date(booking.startDate))) && Date.parse(new Date(startDate)) < Date.parse(new Date(booking.endDate))) || (Date.parse(new Date(endDate)) > Date.parse(new Date(booking.startDate)) && Date.parse(new Date(endDate)) < Date.parse(new Date(booking.endDate)))) {
                newErrors = ['Place is already booked at this time']
                return setErrors(newErrors)
            }
        })
        if (newErrors.length === 0) {
            dispatch(makeBooking({ placeId: place.id, userId: sessionUser.id, startDate, endDate }))
            return history.push(`/bookings/${sessionUser.id}`)
        }
        setErrors(newErrors)
    }

    const reviewPost = (e) => {
        e.preventDefault()
        let newErrors = []
        if (!review) newErrors.push('Review must not be blank')

        if (newErrors.length === 0) {
            setReview('')
           return dispatch(makeReview({ userId: sessionUser.id, placeId: place.id, review }))
        }
    }


    const deleteBooking = e => {
        dispatch(deleteListing(place.id))
        return history.push('/')
    }

    const deleteReview = id => {
        return dispatch(removeReviewFunc(id))
    }

    if (sessionUser?.id === place?.userId) {
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
                <div id='lower-left'>
                    <p id='description'>{place?.description}</p>
                    <h2 id='review-title'>Reviews</h2>
                    <ul id='review-list'>
                        {placeReviews && placeReviews.map(review => (
                            <div key={review.id + 2000} className='review-author-box'>
                                <div className='not-delete-button'>
                                    <li key={review.id} className='review-ind'>{review.review}</li>
                                    <p key={review.userName} className='review-author'>{`-- ${review.userName}`}</p>
                                </div>
                                <div className='possible-deleteButton'>
                                    {sessionUser?.id === review.userId && <p onClick={() => deleteReview(review.id)} className='delete-review-button'>Delete Review</p>}
                                </div>
                            </div>
                        ))}
                    </ul>
                    <form onSubmit={reviewPost} id='create-review-box'>
                        <h2 id='make-review-title'>Make a Review</h2>
                        <textarea
                            value={review}
                            onChange={e => setReview(e.target.value)} id='make-review-text'></textarea>
                        <button id='submit-review-button'>Post</button>
                    </form>
                </div>
                <form onSubmit={createBooking} id='bookit'>
                    <div id='price-list'>
                        <p id='price-page'>{`$${place?.price}`}</p>
                        <p id='per-night'> / night</p>
                    </div>
                    <ul id='booking-errors'>
                        {bookingErrors.map(error => <li key={error} className='booking-error'>{error}</li>
                        )}
                    </ul>
                    <label id='startdate-label'>Start Date</label>
                    <input
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        type='date'></input>
                    <label id='enddate-label'>End Date</label>
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
