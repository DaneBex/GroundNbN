import { csrfFetch } from "./csrf"

const ADD_BOOKING = 'booking/ADD_BOOKING'

const addBooking = booking => {
    return {
        type: ADD_BOOKING,
        payload: booking
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

export const populateBookings = () => async dispatch => {
    const response = await csrfFetch('/api/bookings')

    if (response.ok) {
        const bookings = await response.json()
        dispatch(addBooking(bookings))
    }
}



const initialState = { booking: null }

const bookingReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_BOOKING:
            newState = { ...state }
            newState = Object.assign({}, state)
            newState.booking = action.payload;
            return newState;
        default:
            return state;
    }
}

export default bookingReducer
