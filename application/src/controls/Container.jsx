import React from 'react';
import { Box, Grid } from '@mui/material';

const Container = ({ children }) => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }}>
    <Grid
      container
      spacing={1}
      sx={{
        maxWidth: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '30px'
      }}
    >
      {children}
    </Grid>
  </Box>
);

export default Container;
