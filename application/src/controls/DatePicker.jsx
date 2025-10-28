import React, { useEffect } from 'react';
import { TextField } from '@mui/material';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

const DatePicker = ({ input, meta: { touched, error }, ...custom }) => {
  useEffect(() => {
    if (!input.value) {
      input.onChange(new Date());
    }
  }, [input]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        {...custom}
        value={input.value || null}
        inputFormat="dd.MM.yyyy"
        onChange={(date) => input.onChange(date)}
        renderInput={(params) => (
          <TextField
            {...params}
            error={touched && !!error}
            helperText={touched && error}
            size="small"
            margin="none"
            sx={{
              width: '90%',
              fontSize: '12px',
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
};

export default DatePicker;
