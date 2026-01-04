import React, { memo } from 'react';
import { Typography } from '@mui/material';

const Label = memo(({ children }) => (
  <Typography variant="body2" sx={{ fontSize: '12px', width: '90%', ml: 1 }}>
    {children}
  </Typography>
));

Label.displayName = 'Label';

export default Label;
