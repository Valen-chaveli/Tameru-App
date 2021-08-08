import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { AuthRoute } from './AuthRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRoute = () => {
  const dispatch = useDispatch();

  const { logged, checking } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return (
      <div>
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={logged}
            path="/auth"
            component={AuthRoute}
          />
          <PrivateRoute
            isAuthenticated={logged}
            path="/"
            component={DashboardRoutes}
          />
        </Switch>
      </div>
    </Router>
  );
};
