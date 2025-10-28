import React from 'react';
import { TextField as MuiTextField, InputAdornment } from '@mui/material';
import InputMask from 'react-input-mask';

const Phone = ({ input, meta: { touched, error }, ...custom }) => (
  <InputMask
    {...input}
    mask="999 999 999"
    maskChar=""
    onBlur={(event) => {
      input.onChange(event.target.value);
      input.onBlur(event);
    }}
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
          startAdornment: <InputAdornment position="start">+48</InputAdornment>,
        }}
      />
    )}
  </InputMask>
);

export default Phone;
