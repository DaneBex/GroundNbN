import { csrfFetch } from "./csrf"


const ADD_REVIEW = 'review/ADD_REVIEW'
const LOAD_REVIEW = 'review/LOAD_REVIEW'
const REMOVE_REVIEW = 'review/REMOVE_BOOKING'

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
        type: REMOVE_REVIEW,
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

export const removeReviewFunc = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'delete'
    })

    if (response.ok) {
        dispatch(removeReview(id))
    }
}

export const editReview = (id, formInfo) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formInfo)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(addReview(data))
    }
}

export const makeReview = formInfo => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
        method: 'post',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(formInfo)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(addReview(data))
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
        case ADD_REVIEW:
            newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState
        case REMOVE_REVIEW:
            newState = { ...state }
            delete newState[action.id]
            return newState;
        default:
            return state
    }
}

export default reviewReducer
