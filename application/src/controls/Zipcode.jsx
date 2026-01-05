import { memo, useCallback, useId } from 'react';
import TextField from '@mui/material/TextField';

const Zipcode = memo(({ input, meta, ...rest }) => {
  const uniqueId = useId();
  const inputId = input.name;
  const errorId = `${input.name}-error-${uniqueId}`;
  const hasError = meta.touched && meta.error;

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
      id={inputId}
      value={input.value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={hasError}
      helperText={meta.touched && meta.error}
      inputProps={{
        maxLength: 6,
        'aria-invalid': hasError,
        'aria-describedby': hasError ? errorId : undefined,
      }}
      FormHelperTextProps={{
        id: errorId,
        role: hasError ? 'alert' : undefined,
      }}
      size='small'
      margin='none'
      sx={{ width: '90%', fontSize: '12px' }}
    />
  );
});

Zipcode.displayName = 'Zipcode';

export default Zipcode;
