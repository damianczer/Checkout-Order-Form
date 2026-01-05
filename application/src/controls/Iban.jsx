import { memo, useId } from 'react';
import { TextField as MuiTextField, InputAdornment } from '@mui/material';
import InputMask from 'react-input-mask';

const Iban = memo(({ input, meta: { touched, error }, ...custom }) => {
  const uniqueId = useId();
  const inputId = input.name;
  const errorId = `${input.name}-error-${uniqueId}`;
  const hasError = touched && !!error;

  return (
    <InputMask
      {...input}
      mask="99 9999 9999 9999 9999 9999 9999"
      maskChar=""
    >
      {() => (
        <MuiTextField
          {...custom}
          id={inputId}
          error={hasError}
          helperText={touched && error}
          size='small'
          margin='none'
          sx={{ width: '90%', fontSize: '12px' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">PL</InputAdornment>,
          }}
          inputProps={{
            'aria-invalid': hasError,
            'aria-describedby': hasError ? errorId : undefined,
          }}
          FormHelperTextProps={{
            id: errorId,
            role: hasError ? 'alert' : undefined,
          }}
        />
      )}
    </InputMask>
  );
});

Iban.displayName = 'Iban';

export default Iban;
