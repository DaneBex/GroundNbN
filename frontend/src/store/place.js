
import { csrfFetch } from "./csrf"


const ADD_PLACE = 'place/ADD_USER'
const REMOVE_PLACE = 'place/REMOVE_PLACE'
const UPDATE_PLACE = 'place/UPDATE_PLACE'
const LOAD_PLACE = 'place/LOAD_PLACE'

const addPlace = (place) => {
    return {
        type: ADD_PLACE,
        payload: place
    }
}

const loadPlace = (places) => {
    return {
        type: LOAD_PLACE,
        payload: places
    }
}

const removePlace = (id) => {
    return {
        type: REMOVE_PLACE,
        id
    }
}

const updatePlace = () => {

}

export const populatePlaces = () => async (dispatch) => {
    const response = await csrfFetch('/api/')
    if (response.ok) {
        const places = await response.json()
        dispatch(loadPlace(places))
    }
}


export const makeListing = (formInfo) => async dispatch => {
    const response = await csrfFetch('/api/places', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formInfo)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(addPlace(data))
    }
}

export const editListing = (id, formInfo) => async dispatch => {
    const response = await csrfFetch(`/api/places/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formInfo)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(addPlace(data))
    }
}

export const deleteListing = (id) => async dispatch => {
    const response = await csrfFetch(`/api/places/${id}`, {
        method: 'delete'
    })

    if (response.ok) {
        dispatch(removePlace(id))
    }
}


const initialState = {};

const placeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_PLACE:
            newState = {}
            action.payload.forEach(place => {
                newState[place.id] = place
            })
            return newState
        case ADD_PLACE:
            newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState;
        case REMOVE_PLACE:
            newState = { ...state }
            delete newState[action.id]
            return newState;
        default:
            return state;
    }
}

export default placeReducer
