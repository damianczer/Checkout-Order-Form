import { memo, useCallback, useId } from 'react';
import { TextField as MuiTextField, InputAdornment } from '@mui/material';
import InputMask from 'react-input-mask';

const Phone = memo(({ input, meta: { touched, error }, ...custom }) => {
  const uniqueId = useId();
  const inputId = input.name;
  const errorId = `${input.name}-error-${uniqueId}`;
  const hasError = touched && !!error;

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
          id={inputId}
          error={hasError}
          helperText={touched && error}
          size='small'
          margin='none'
          sx={{ width: '90%', fontSize: '12px' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">+48</InputAdornment>,
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

Phone.displayName = 'Phone';

export default Phone;
