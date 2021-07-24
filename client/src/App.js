import React from 'react';
import { Provider } from 'react-redux';
import { api } from './config/axios';
import { AppRoute } from './routes/AppRoute';
import { store } from './store/store';

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </div>
  );
};
