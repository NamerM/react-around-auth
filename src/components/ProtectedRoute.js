import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ children, isLoggedIn }) {
  return (
    <Route>
      { isLoggedIn ? children : <Redirect to='/sign-in' /> }
    </Route>

  )



  // return isCheckingToken ?
  //   <Loader /> :
  //   props.loggedIn ?
  //     props.component : <Redirect to={'/sign-in'} /> //<Navigate to=? />



}

export default ProtectedRoute;
