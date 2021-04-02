import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom'; 
import NotFound from '../components/NotFound'; 

const SubRoutes = ({ routes }) => {
  const { is_admin } = useSelector(state => state.user)
  return (
    <Switch>
      {
        routes.map(route => <AuthorizedRoute exact key={route.path} path={route.path} component={route.component} is_admin={is_admin} />)
      }
      {/* <AuthorizedRoute path="/admin/create-board" component={Promotion} /> */}
      <Route component={NotFound} />

    </Switch>

  );
}

export default SubRoutes;