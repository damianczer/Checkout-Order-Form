import React from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

const Checkbox = ({ input, label, ...custom }) => (
  <FormControlLabel
    control={<MuiCheckbox {...input} {...custom} sx={{ fontSize: '12px' }} />}
    label={label}
  />
);

export default Checkbox;
