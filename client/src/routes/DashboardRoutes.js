import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { NavBar } from '../components/ui/NavBar';
import { purple } from '@material-ui/core/colors';

export const DashboardRoutes = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#D938D2',
      },
      secondary: {
        main: '#792C76',
      },
      third: {
        main: '#792C76',
      },
    },
    typography: {
      fontFamily: 'Roboto',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/home" component={HomeScreen} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </ThemeProvider>
  );
};
