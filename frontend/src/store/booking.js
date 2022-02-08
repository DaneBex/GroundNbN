import { csrfFetch } from "./csrf"

const ADD_BOOKING = 'booking/ADD_BOOKING'
const LOAD_BOOKING = 'booking/LOAD_BOOKING'
const REMOVE_BOOKING = 'booking/REMOVE_BOOKING'

const addBooking = booking => {
    console.log('bookings', booking)
    return {
        type: ADD_BOOKING,
        payload: booking
    }
}


const loadBooking = bookings => {
    return {
        type: LOAD_BOOKING,
        payload: bookings
    }
}

const removeBooking = id => {
    return {
        type: REMOVE_BOOKING,
        id
    }
}




export const makeBooking = formInfo => async dispatch => {
    const response = await csrfFetch('/api/bookings', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formInfo)
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(addBooking(data))
    }
}

export const deleteBooking = (id) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${id}`, {
        method: 'delete'
    })

    if (response.ok) {
        dispatch(removeBooking(id))
    }
}

export const populateBookings = () => async dispatch => {
    const response = await csrfFetch('/api/bookings')

    if (response.ok) {
        const bookings = await response.json()
        dispatch(loadBooking(bookings))
    }
}



const initialState = {}

const bookingReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_BOOKING:
            newState = {}
            action.payload.forEach(booking => {
                newState[booking.id] = booking
            })
            return newState;
        case ADD_BOOKING:
            newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState;
        case REMOVE_BOOKING:
            newState = { ...state }
           delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default bookingReducer
