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
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import ProductType from '../types/ProductType';

const Products: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [list, setList] = useState<ProductType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePrice = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const addList = () => {
    if (name.length) {
      const tempId = new Date().getTime();
      setList([...list, { id: tempId, price: price, title: name, enable: true }]);
    }

    setName('');
    setPrice(0);
  };

  const removeList = (id: number) => {
    const index = list.findIndex(item => item.id === id);

    const newList = [...list];

    newList.splice(index, 1);

    setList(newList);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h3">Produtos - {list.length}</Typography>
        <Divider />
      </Grid>

      <Grid item xs={5}>
        <TextField fullWidth value={name} label="Nome do produto" onChange={e => handleChange(e)} />
      </Grid>
      <Grid item xs={5}>
        <TextField
          fullWidth
          value={price}
          type="number"
          label="Valor do produto"
          onChange={e => handleChangePrice(e)}
        />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" onClick={addList}>
          Cadastrar
        </Button>
      </Grid>

      <Grid item xs={12}>
        {list.map(item => {
          return (
            <React.Fragment key={item.id}>
              <ListItem
                secondaryAction={
                  <IconButton onClick={() => removeList(item.id)} edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>{item.title[0].toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={`R$ ${item.price}`} />
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Products;
