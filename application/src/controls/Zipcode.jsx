import React from 'react';
import TextField from '@mui/material/TextField';

const Zipcode = ({ input, meta, ...rest }) => {
  const handleChange = (event) => {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = `${value.slice(0, 2)}-${value.slice(2, 5)}`;
    }
    input.onChange(value);
  };

  return (
    <TextField
      {...input}
      {...rest}
      value={input.value}
      onChange={handleChange}
      onBlur={(event) => {
        input.onBlur(event);
      }}
      error={meta.touched && meta.error}
      helperText={meta.touched && meta.error}
      inputProps={{ maxLength: 6 }}
      size='small'
      margin='none'
      sx={{ width: '90%', fontSize: '12px' }}
    />
  );
};

export default Zipcode;
