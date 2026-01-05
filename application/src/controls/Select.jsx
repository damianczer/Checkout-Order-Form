import { memo, useId } from 'react';
import { FormControl, Select as MuiSelect, FormHelperText } from '@mui/material';

const Select = memo(({ input, meta: { touched, error }, children, ...custom }) => {
    const uniqueId = useId();
    const inputId = input.name;
    const labelId = `${input.name}-label`;
    const errorId = `${input.name}-error-${uniqueId}`;
    const hasError = touched && !!error;

    return (
        <FormControl
            error={hasError}
            size="small"
            sx={{ width: '90%' }}
        >
            <MuiSelect
                {...input}
                {...custom}
                id={inputId}
                labelId={labelId}
                inputProps={{
                    id: inputId,
                    'aria-labelledby': labelId,
                    'aria-invalid': hasError,
                    'aria-describedby': hasError ? errorId : undefined,
                }}
            >
                {children}
            </MuiSelect>
            {touched && error && (
                <FormHelperText id={errorId} role="alert">
                    {error}
                </FormHelperText>
            )}
        </FormControl>
    );
});

Select.displayName = 'Select';

export default Select;
