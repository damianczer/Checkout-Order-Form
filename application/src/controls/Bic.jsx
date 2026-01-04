import React, { memo } from 'react';
import { TextField as MuiTextField } from '@mui/material';
import InputMask from 'react-input-mask';

const Bic = memo(({ input, meta: { touched, error }, ...custom }) => (
  <InputMask
    {...input}
    mask="aaaaaa99"
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
        inputProps={{
          style: { textTransform: 'uppercase' }
        }}
      />
    )}
  </InputMask>
));

Bic.displayName = 'Bic';

export default Bic;
