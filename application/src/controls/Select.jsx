import React, { memo } from 'react';
import { TextField } from '@mui/material';

const Select = memo(({ input, meta: { touched, error }, children, ...custom }) => (
    <TextField
        select
        {...input}
        {...custom}
        error={touched && !!error}
        helperText={touched && error}
        size='small'
        margin='none'
        sx={{ width: '90%', fontSize: '12px' }}
    >
        {children}
    </TextField>
));

Select.displayName = 'Select';

export default Select;
