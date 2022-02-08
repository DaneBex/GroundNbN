import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBooking, populateBookings } from '../../store/booking'
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

    if (bookings && sessionUser && places) {
        myBookings = bookings.filter(booking => booking.userId === sessionUser.id)
       myBookings.forEach(booking => {
           places.forEach(place => {
               if (booking.placeId === place.id) {
                   booking.name = place.name
                   booking.image = place.image
                   booking.price = place.price
               }
           })
       })
    }

    useEffect(() => {
        dispatch(populateBookings())
        console.log(bookings)
    }, [dispatch])

    if (places.length === 0) {
        NoBookings = () => {
            return (
                <p>No Bookings Yet</p>
            )
        }
    }


    return (
        <>
            <h1 id='my-bookings-title'>My Bookings</h1>
            {myBookings && myBookings.map(booking => (
                <div key={booking.id} id='booking-box'>
                    <div key={booking.userId} className='name-img'>
                        <p key={booking.name} className='booking-name'>{booking.name}</p>
                        <img key={booking.image} className='booking-image' src={booking.image}></img>
                    </div>
                    <div key={booking.id + 1000} className='times-price'>
                        <p key={booking.startDate} className='start-date'>{`Start Date: ${new Date(booking.startDate.replace(/-/g, '\/').replace(/T.+/, '')).toString().slice(0, 15)}`}</p>
                        <p key={booking.endDate} className='end-date'>{`End Date: ${new Date(booking.endDate.replace(/-/g, '\/').replace(/T.+/, '')).toString().slice(0, 15)}`}</p>
                        <p key={booking.price} className='booking-price'>{`$${booking.price} / night`}</p>
                    </div>
                    <div key={booking.name + 'delete'} className='delete-booking'>
                        <p onClick={() => dispatch(deleteBooking(booking.id))} className='delete-booking-words' key={booking.price + 1000}>Delete My Booking</p>
                        <i onClick={() => dispatch(deleteBooking(booking.id))} class="fas fa-calendar-times"></i>
                    </div>
                </div>
            ))}

        </>
    )
}
