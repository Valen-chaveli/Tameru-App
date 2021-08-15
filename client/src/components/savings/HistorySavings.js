import {
  Container,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  TableHead,
} from '@material-ui/core';
import { useStyles } from './styles/historySavingsStyle';

const data = [
  { date: '23-02-21', quantity: '+300€' },
  { date: '23-02-21', quantity: '+305€' },
  { date: '23-02-21', quantity: '+400€' },
  { date: '23-02-21', quantity: '+400€' },
  { date: '23-02-21', quantity: '+400€' },
  { date: '23-02-21', quantity: '+400€' },
  { date: '23-02-21', quantity: '+400€' },
  { date: '23-02-21', quantity: '+400€' },
  { date: '23-02-21', quantity: '+400€' },
  { date: '23-02-21', quantity: '+400€' },
  { date: '23-02-21', quantity: '+400€' },
];

export const HistorySavings = () => {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <div style={{ margin: '20px' }}> Ultimos ahorros</div>

      <Table size="large">
        <TableContainer className={classes.main}>
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Cantidad</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((cell, i, arr) => {
              return (
                <TableRow>
                  <TableCell styles={{ width: '100%' }}>{cell.date}</TableCell>
                  <TableCell>{cell.quantity}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TableContainer>
      </Table>
      <div>fgdgf</div>
    </Container>
  );
};
