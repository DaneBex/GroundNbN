import React from 'react';
import { NavLink, Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from '../../store/session'
import './Navigation.css';
import { makeBooking } from '../../store/booking';

function Navigation({ isLoaded }){
    const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);
  let myBookings = [];

  const goHome = e => {
      return <Redirect exact to='/'/>
  }

  const logout = e => {
      return dispatch(sessionActions.logout())
  }

  const makeListing = (
    <Link to='/host' id='host-place'>Host a Place</Link>
  )


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div id='log-out-profile'>
          <p>{sessionUser.username}</p>
          <button
            onClick={logout}
          id='logout-button'>Log Out</button>
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink id='sign-up-button' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
      <div id='nav-bar'>
      <Link to='/' id='nav-logo' />
    <ul id='nav-buttons'>
        <li>{sessionUser && <Link id='my-bookings' to={`/bookings/${sessionUser.id}`}>My Bookings</Link>}</li>
        <li>{sessionUser && makeListing}</li>
      <li>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </div>
  );
}

export default Navigation;
