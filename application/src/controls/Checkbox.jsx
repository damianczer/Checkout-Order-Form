import React, { memo, useId } from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

const Checkbox = memo(({ input, label, ...custom }) => {
  const uniqueId = useId();
  const inputId = `${input.name}-${uniqueId}`;

  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          {...input}
          {...custom}
          id={inputId}
          size="small"
          sx={{ padding: '4px', ml: '5px' }}
        />
      }
      label={label}
      htmlFor={inputId}
      sx={{
        my: 2,
        '& .MuiFormControlLabel-label': { fontSize: '0.875rem', fontWeight: 'normal' }
      }}
    />
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
