import { memo } from 'react';
import { Typography } from '@mui/material';

const Label = memo(({ children, htmlFor, id }) => (
  <Typography
    component="label"
    htmlFor={htmlFor}
    id={id || (htmlFor ? `${htmlFor}-label` : undefined)}
    sx={{
      fontSize: '12px',
      width: '90%',
      ml: 1,
      mb: 0.5,
      display: 'block',
      color: 'text.primary',
    }}
  >
    {children}
  </Typography>
));

Label.displayName = 'Label';

export default Label;
