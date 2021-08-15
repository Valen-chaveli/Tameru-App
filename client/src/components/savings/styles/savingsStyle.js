import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  title: {
    color: '#D938D2',
    fontWeight: 'bold',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    marginTop: '20px',
  },

  lastRow: {
    borderBottom: 'none',
  },
  sphere: {
    borderRadius: '50%',

    height: '400px',
    border: '1px solid #D938D2',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    boxShadow: 'inset 3px 2px 3px 2px #D938D2',
  },

  totalQuantitySavings: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    lineHeight: '75px',
    fontSize: '45px',
    fontWeight: 'bold',
    textShadow: '1px 2px #D938D2',
  },

  deleteIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#D938D2',
    marginTop: '5px',
  },

  icon: {
    borderRadius: '50%',
    padding: '3px',
    '&:active': {
      backgroundColor: '#eb98e7',
      transition: '0.6s',
    },
  },
}));
