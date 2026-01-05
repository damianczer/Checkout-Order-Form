import { memo, useCallback, useId } from 'react';
import { TextField as MuiTextField } from '@mui/material';

const Text = memo(({ input, meta: { touched, error }, ...custom }) => {
  const uniqueId = useId();
  const inputId = input.name;
  const errorId = `${input.name}-error-${uniqueId}`;
  const hasError = touched && !!error;

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
      id={inputId}
      error={hasError}
      helperText={touched && error}
      size='small'
      margin='none'
      sx={{ width: '90%', fontSize: '12px' }}
      onChange={handleChange}
      onBlur={handleBlur}
      inputProps={{
        ...custom.inputProps,
        'aria-invalid': hasError,
        'aria-describedby': hasError ? errorId : undefined,
      }}
      FormHelperTextProps={{
        id: errorId,
        role: hasError ? 'alert' : undefined,
      }}
    />
  );
});

Text.displayName = 'Text';

export default Text;
