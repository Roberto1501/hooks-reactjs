import {
  Avatar,
  Button,
  Divider,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import CategoryType from '../types/CategoryType';
import generateId from '../utils/generateId';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [valid, setValid] = useState<boolean>(false);
  const [agree, setAgree] = useState<boolean>(false);

  useEffect(() => {
    if (title.length >= 3) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [title]);

  const addCategory = () => {
    setCategories([...categories, { description: description, id: generateId(), title: title }]);
    setTitle('');
    setDescription('');
  };

  const removeCategory = (id: number) => {
    handleClickOpen();

    const index = categories.findIndex(item => item.id === id);

    if (index !== -1) {
      const newCategories = [...categories];
      newCategories.splice(index, 1);
      setCategories(newCategories);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clicou = () => {
    setAgree(true);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h3">Categorias</Typography>
      </Grid>
      <Grid item xs={5}>
        <TextField fullWidth value={title} label="Nome da categoria" onChange={e => setTitle(e.target.value)} />
      </Grid>
      <Grid item xs={5}>
        <TextField fullWidth value={description} label="descrição" onChange={e => setDescription(e.target.value)} />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" onClick={addCategory} disabled={!valid}>
          Cadastrar
        </Button>
      </Grid>

      <Grid item xs={12}>
        {categories.map(item => {
          return (
            <React.Fragment key={item.id}>
              <ListItem
                secondaryAction={
                  <IconButton onClick={() => removeCategory(item.id)} edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>{item.title[0].toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.description} />
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })}
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Apagar'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Deseja apagar o item?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Voltar</Button>
          <Button onClick={clicou} autoFocus>
            Apagar
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Categories;
