import React from 'react';
import { TextField as MuiTextField, InputAdornment } from '@mui/material';
import InputMask from 'react-input-mask';

const Iban = ({ input, meta: { touched, error }, ...custom }) => (
  <InputMask
    {...input}
    mask="99 9999 9999 9999 9999 9999 9999"
    maskChar=""
  >
    {() => (
      <MuiTextField
        {...custom}
        error={touched && !!error}
        helperText={touched && error}
        size='small'
        margin='none'
        sx={{ width: '90%', fontSize: '12px' }}
        InputProps={{
          startAdornment: <InputAdornment position="start">PL</InputAdornment>,
        }}
      />
    )}
  </InputMask>
);

export default Iban;
