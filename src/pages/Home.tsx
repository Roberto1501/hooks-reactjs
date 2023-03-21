import { Grid, Typography } from '@mui/material';
import React from 'react';

const Home: React.FC = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h3">Home</Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
