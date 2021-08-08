import { useMediaQuery } from '@material-ui/core';
import { Box, Grid } from '@material-ui/core';
import { Savings } from '../savings/Savings';
import { InsertSavings } from '../savings/InsertSavings';
import { useStyles } from './styles/homeStyles';

export const HomeScreen = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Savings />
      </Grid>
      {!isDesktop && (
        <>
          <Grid item xs={12}>
            <InsertSavings />
          </Grid>
        </>
      )}

      {isDesktop && (
        <>
          <Grid item md={4} className={classes.insertSavings}>
            <InsertSavings />
          </Grid>
          <Grid item md={4}>
            <Box border={2}>Ultimos Ahorros</Box>
          </Grid>
          <Grid item md={12}>
            <Box border={2}>Estadisticas</Box>
          </Grid>
        </>
      )}
    </Grid>
  );
};
