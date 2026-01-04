import React, { memo, useCallback } from 'react';
import { TextField as MuiTextField } from '@mui/material';

const Text = memo(({ input, meta: { touched, error }, ...custom }) => {
  const handleChange = useCallback((event) => {
    input.onChange(event);
    setTimeout(() => input.onBlur(event), 0);
  }, [input]);

  const handleBlur = useCallback((event) => {
    input.onBlur(event);
  }, [input]);

  return (
    <MuiTextField
      {...input}
      {...custom}
      error={touched && !!error}
      helperText={touched && error}
      size='small'
      margin='none'
      sx={{ width: '90%', fontSize: '12px' }}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
});

Text.displayName = 'Text';

export default Text;
