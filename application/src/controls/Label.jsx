import React from 'react';
import { Typography } from '@mui/material';

const Label = ({ children }) => (
  <Typography variant="body2" sx={{ fontSize: '12px', width: '90%' }}>
    {children}
  </Typography>
);

export default Label;
