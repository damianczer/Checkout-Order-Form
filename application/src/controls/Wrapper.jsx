import React, { memo } from 'react';
import { Grid } from '@mui/material';

const Wrapper = memo(({ children }) => (
  <Grid item xs={12} sm={6}>
    {children}
  </Grid>
));

Wrapper.displayName = 'Wrapper';

export default Wrapper;
