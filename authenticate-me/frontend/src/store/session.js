import { bindActionCreators } from "redux"
import { csrfFetch } from "./csrf"

const ADD_SESSION = '/store/session'
const REMOVE_SESSION = '/store/session'

const makeSession = (user) => {
return {user,
    type: ADD_SESSION
}
}

const removeSession = () => {
return {type: REMOVE_SESSION}
}

export const setSession = (credential, password) => async dispatch => {
const response = await csrfFetch('/api/session', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({credential, password}),
})

if (response.ok) {
    const user = await response.json()
    dispatch(makeSession(user))
}
}

const initialState = {}


export default function sessionReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case ADD_SESSION:
            newState = {}
            newState.user = action.user
            return newState;
        case REMOVE_SESSION:
            newState = {};
            newState.user = null;
            return newState
        default:
            return state;
    }
}
