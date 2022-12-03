import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useLoggedIn } from '../../contexts/LoggedInContext';

const ProtectedRoute = ({ children, path }) => {
  const { isloggedIn } = useLoggedIn();
  console.log(isloggedIn)
  return isloggedIn ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;
