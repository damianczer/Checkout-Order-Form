import React, { memo, useCallback } from 'react';
import { TextField as MuiTextField, InputAdornment } from '@mui/material';
import InputMask from 'react-input-mask';

const Phone = memo(({ input, meta: { touched, error }, ...custom }) => {
  const handleBlur = useCallback((event) => {
    input.onChange(event.target.value);
    input.onBlur(event);
  }, [input]);

  return (
    <InputMask
      {...input}
      mask="999 999 999"
      maskChar=""
      onBlur={handleBlur}
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
});

Phone.displayName = 'Phone';

export default Phone;
