import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useParams } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import HostForm from "./components/HostForm";
import EditHostForm from "./components/EditHostForm";
import { populatePlaces } from "./store/place";
import ListingPage from "./components/ListingPage";
import BookingsPage from "./components/BookingsPage";

function App() {
  const dispatch = useDispatch();
  const places = useSelector(state => state.place.place)
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(populatePlaces())
  }, [dispatch]);



  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/host'>
            <HostForm />
          </Route>
          <Route path='/places/:id/edit'>
            <EditHostForm />
          </Route>
          <Route path='/places/:id' >
            <ListingPage />
          </Route>
          <Route path='/bookings/:id'>
            <BookingsPage />
          </Route>
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
