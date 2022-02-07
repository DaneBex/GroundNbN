import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { populateBookings } from '../../store/booking'
import './BookingsPage.css'


export default function BookingsPage() {
    const dispatch = useDispatch()
    const bookings = useSelector(state => state.booking.booking)
    const sessionUser = useSelector(state => state.session.user)
    let myBookings = [];

    if (bookings && sessionUser) {
        myBookings = bookings.filter(booking => booking.userId === sessionUser.id)
    }


    useEffect(() => {
       dispatch(populateBookings())
    }, [dispatch])
    return (
        <>
        <h1 id='my-bookings-title'>My Bookings</h1>
        <div id='booking-box'>
        {myBookings && myBookings.map(booking => (
            <p key={booking.id} id='start-date'>{(booking.startDate)}</p>
        ))}
        </div>
        </>
    )
}
