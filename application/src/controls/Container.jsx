import React, { memo } from 'react';
import { Box, Grid } from '@mui/material';

const Container = memo(({ children }) => (
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
));

Container.displayName = 'Container';

export default Container;
