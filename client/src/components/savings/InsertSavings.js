import { Container } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useStyles } from './styles/insertSavingsStyle';

export const InsertSavings = () => {
  const classes = useStyles();
  return (
    <Container>
      <form className={classes.formInsert} noValidate autoComplete="off">
        <TextField
          className={classes.input}
          label="Cantidad ganada este mes (€)"
          variant="outlined"
        />
        <TextField
          className={classes.input}
          label="% de ahorro"
          variant="outlined"
        />
        <div className={classes.inputSubmit}>
          <Button
            variant="contained"
            color="primary"
            className={classes.inputSubmit}
          >
            Añadir al ahorro
          </Button>
        </div>
      </form>
    </Container>
  );
};
