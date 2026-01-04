import React, { memo } from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

const Checkbox = memo(({ input, label, ...custom }) => (
  <FormControlLabel
    control={<MuiCheckbox {...input} {...custom} size="small" sx={{ padding: '4px', ml: '5px' }} />}
    label={label}
    sx={{
      my: 2,
      '& .MuiFormControlLabel-label': { fontSize: '0.875rem', fontWeight: 'normal' }
    }}
  />
));

Checkbox.displayName = 'Checkbox';

export default Checkbox;
