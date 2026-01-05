import { memo, useId } from 'react';
import { TextField as MuiTextField } from '@mui/material';
import InputMask from 'react-input-mask';

const Bic = memo(({ input, meta: { touched, error }, ...custom }) => {
  const uniqueId = useId();
  const inputId = input.name;
  const errorId = `${input.name}-error-${uniqueId}`;
  const hasError = touched && !!error;

  return (
    <InputMask
      {...input}
      mask="aaaaaa99"
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
          inputProps={{
            style: { textTransform: 'uppercase' },
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

Bic.displayName = 'Bic';

export default Bic;
