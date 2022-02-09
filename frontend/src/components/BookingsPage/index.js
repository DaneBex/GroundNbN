import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBooking, populateBookings, populateUserBookings } from '../../store/booking'
import './BookingsPage.css'


export default function BookingsPage() {
    const dispatch = useDispatch()
    const bookingsObj = useSelector(state => state.booking)
    const placesObj = useSelector(state => state.place)
    const sessionUser = useSelector(state => state.session.user)
    const bookings = Object.values(bookingsObj)
    const places = Object.values(placesObj)
    let myBookings = [];
    let myPlaces = [];
    let NoBookings = null

    useEffect(() => {
        dispatch(populateUserBookings(sessionUser.id))
        console.log('my bookings', bookings)
    }, [dispatch])


    return (
        <>
            <h1 id='my-bookings-title'>My Bookings</h1>
            {bookings && bookings.map(booking => (
                <div key={booking.id} id='booking-box'>
                    <div key={booking.userId} className='name-img'>
                        <p key={booking.Place?.name} className='booking-name'>{booking.Place?.name}</p>
                        <img key={booking.Place?.image} className='booking-image' src={booking.Place?.image}></img>
                    </div>
                    <div key={booking.id + 1000} className='times-price'>
                        <p key={booking.startDate} className='start-date'>{`Start Date: ${new Date(booking.startDate.replace(/-/g, '\/').replace(/T.+/, '')).toString().slice(0, 15)}`}</p>
                        <p key={booking.endDate} className='end-date'>{`End Date: ${new Date(booking.endDate.replace(/-/g, '\/').replace(/T.+/, '')).toString().slice(0, 15)}`}</p>
                        <p key={booking.Place?.price} className='booking-price'>{`$${booking.Place?.price} / night`}</p>
                    </div>
                    <div key={booking.name + 'delete'} className='delete-booking'>
                        <p onClick={() => dispatch(deleteBooking(booking.id))} className='delete-booking-words' key={booking.price + 1000}>Delete My Booking</p>
                        <i onClick={() => dispatch(deleteBooking(booking.id))} className="fas fa-calendar-times"></i>
                    </div>
                </div>
            ))}

        </>
    )
}
