import React from 'react';
import { Grid } from '@mui/material';

const Wrapper = ({ children }) => (
  <Grid item xs={12} sm={6}>
    {children}
  </Grid>
);

export default Wrapper;
