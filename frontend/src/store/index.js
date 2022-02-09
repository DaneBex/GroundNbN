import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import { csrfFetch, restoreCSRF } from "./csrf";
import * as sessionActions from './session';
import placeReducer from "./place";
import bookingReducer from "./booking";
import userReducer from "./user";
import reviewReducer from "./review";



const rootReducer = combineReducers({
 session : sessionReducer,
 place : placeReducer,
 booking: bookingReducer,
 user: userReducer,
 review: reviewReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};


export default configureStore;
