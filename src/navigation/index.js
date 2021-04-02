import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect
} from "react-router-dom";
import AuthScreen from '../components/Auth';
import NotFound from '../components/NotFound';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" render={() => <Redirect to="/admin/dashboard" />} /> */}
        <Route path="/" component={AuthScreen} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;