import { csrfFetch } from "./csrf"


const ADD_REVIEW = 'review/ADD_REVIEW'
const LOAD_REVIEW = 'review/LOAD_REVIEW'
const REMOVE_BOOKING = 'review/REMOVE_BOOKING'

const addReview = review => {
    return {
        type: ADD_REVIEW,
        payload: review
    }
}

const loadReview = reviews => {
    return {
        type: LOAD_REVIEW,
        payload: reviews
    }
}

const removeReview = id => {
    return {
        type: REMOVE_BOOKING,
        id
    }
}



export const populateReviews = () => async dispatch => {
    const response = await csrfFetch('/api/reviews')

    if (response.ok) {
        const reviews = await response.json()
        dispatch(loadReview(reviews))
    }
}

const initialState = {}

const reviewReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD_REVIEW:
            newState = {}
            action.payload.forEach(review => {
                newState[review.id] = review
            })
            return newState
        default:
            return state
    }
}

export default reviewReducer
