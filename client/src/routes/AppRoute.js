import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRoute = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute />
          <PrivateRoute />
        </Switch>
      </div>
    </Router>
  );
};
