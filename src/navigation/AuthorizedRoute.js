import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


const AuthorizedRoute = (route) => {
  const { user, token, is_admin } = useSelector(state => state.user)
  const isAuthorized = useMemo(() => token !== null ? true : false, [token]);

  return (
    <Route
      path={route.path}
      render={(props) => isAuthorized ? (
        <route.component {...props} routes={route.routes} is_admin={is_admin} />
      ) : <Redirect to="/auth" />}
    />
  );
}

export default AuthorizedRoute;