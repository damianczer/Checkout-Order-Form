import React from 'react';
import { TextField as MuiTextField } from '@mui/material';

const Text = ({ input, meta: { touched, error }, ...custom }) => (
  <MuiTextField
    {...input}
    {...custom}
    error={touched && !!error}
    helperText={touched && error}
    size='small'
    margin='none'
    sx={{ width: '90%', fontSize: '12px' }}
    onChange={(event) => {
      input.onChange(event);
      setTimeout(() => input.onBlur(event), 0);
    }}
    onBlur={(event) => {
      input.onBlur(event);
    }}
  />
);

export default Text;
