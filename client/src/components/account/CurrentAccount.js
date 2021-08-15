import { FormControl, Select, MenuItem } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { useStyles } from './styles/currentAccountStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import EuroIcon from '@material-ui/icons/Euro';
export const CurrentAccount = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = () => {
    setOpen(false);
  };

  return (
    <div className={classes.title}>
      <Button onClick={handleOpen} className={classes.title}>
        Cuenta : Viajes
      </Button>

      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Selecciona una cuenta</DialogTitle>
        <List>
          <ListItem button onClick={handleListItemClick}>
            <ListItemAvatar>
              <Avatar>
                <EuroIcon color="secondary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Japon" />
          </ListItem>
          <ListItem button onClick={handleListItemClick}>
            <ListItemAvatar>
              <Avatar>
                <EuroIcon color="secondary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vida" />
          </ListItem>
          <ListItem button onClick={handleListItemClick}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon color="primary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Agregar cuenta" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};
