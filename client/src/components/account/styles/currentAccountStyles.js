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
}));
