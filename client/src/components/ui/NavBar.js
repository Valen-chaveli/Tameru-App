import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from './styles/navBarStyles';

export const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h4">TAMERU</Typography>
      </Toolbar>
    </AppBar>
  );
};
