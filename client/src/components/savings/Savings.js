import {
  Container,
  Table,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useStyles } from './styles/savingsStyle';

import DeleteIcon from '@material-ui/icons/Delete';
const data = [
  { date: '23-02-21', quantity: '+300€' },
  { date: '23-02-21', quantity: '+305€' },
  { date: '23-02-21', quantity: '+400€' },
];

export const Savings = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Button className={classes.title}>Cuenta : Viajes</Button>
      </div>
      <div>
        <Container>
          <div className={classes.sphere}>
            <div className={classes.totalQuantitySavings}>560€</div>
            <div className={classes.historyInfo}>
              <Container>
                <div>Úlitmos ahorros insertados</div>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableCell>Fecha</TableCell>
                      <TableCell>Cantidad</TableCell>
                    </TableHead>
                    <TableBody>
                      {data.map((cell, i, arr) => {
                        if (i == arr.length - 1) {
                          return (
                            <TableRow>
                              <TableCell className={classes.lastRow}>
                                {cell.date}
                              </TableCell>
                              <TableCell className={classes.lastRow}>
                                {cell.quantity}
                              </TableCell>
                            </TableRow>
                          );
                        } else {
                          return (
                            <TableRow>
                              <TableCell>{cell.date}</TableCell>
                              <TableCell>{cell.quantity}</TableCell>
                            </TableRow>
                          );
                        }
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className={classes.deleteIcon}>
                  <DeleteIcon style={{ fontSize: 30 }} />
                </div>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
