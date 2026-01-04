import React, { memo, useCallback } from 'react';
import TextField from '@mui/material/TextField';

const Zipcode = memo(({ input, meta, ...rest }) => {
  const handleChange = useCallback((event) => {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = `${value.slice(0, 2)}-${value.slice(2, 5)}`;
    }
    input.onChange(value);
  }, [input]);

  const handleBlur = useCallback((event) => {
    input.onBlur(event);
  }, [input]);

  return (
    <TextField
      {...input}
      {...rest}
      value={input.value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={meta.touched && meta.error}
      helperText={meta.touched && meta.error}
      inputProps={{ maxLength: 6 }}
      size='small'
      margin='none'
      sx={{ width: '90%', fontSize: '12px' }}
    />
  );
});

Zipcode.displayName = 'Zipcode';

export default Zipcode;
