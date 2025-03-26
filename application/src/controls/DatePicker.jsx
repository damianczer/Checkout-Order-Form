import React from 'react';
import { TextField } from '@mui/material';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

const DatePicker = ({ input, meta: { touched, error }, ...custom }) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <MuiDatePicker
      {...input}
      {...custom}
      value={input.value || new Date()}
      inputFormat="dd.MM.yyyy"
      sx={{ width: '90%', fontSize: '12px', '.MuiInputBase-root': { height: '40px' } }}
      renderInput={(params) => (
        <TextField
          {...params}
          error={touched && !!error}
          helperText={touched && error}
          size='small'
          margin='none'        
        />
      )}
      onChange={(date) => input.onChange(date)}
    />
  </LocalizationProvider>
);

export default DatePicker;
