import { memo, useEffect, useCallback, useId } from 'react';
import { TextField } from '@mui/material';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

const DatePicker = memo(({ input, meta: { touched, error }, ...custom }) => {
  const uniqueId = useId();
  const inputId = input.name;
  const errorId = `${input.name}-error-${uniqueId}`;
  const hasError = touched && !!error;

  useEffect(() => {
    if (!input.value) {
      input.onChange(new Date());
    }
  }, [input]);

  const handleChange = useCallback((date) => {
    input.onChange(date);
  }, [input]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        {...custom}
        value={input.value || null}
        inputFormat="dd.MM.yyyy"
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            id={inputId}
            error={hasError}
            helperText={touched && error}
            size="small"
            margin="none"
            sx={{
              width: '90%',
              fontSize: '12px',
            }}
            inputProps={{
              ...params.inputProps,
              'aria-invalid': hasError,
              'aria-describedby': hasError ? errorId : undefined,
            }}
            FormHelperTextProps={{
              id: errorId,
              role: hasError ? 'alert' : undefined,
            }}
          />
        )}
        sx={{
          width: '90%',
          '.MuiInputBase-root': { height: '40px' },
          '.MuiOutlinedInput-root': { height: '40px' },
        }}
      />
    </LocalizationProvider>
  );
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
