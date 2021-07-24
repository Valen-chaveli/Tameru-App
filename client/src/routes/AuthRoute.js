import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';

export const AuthRoute = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/register" component={LoginScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};
