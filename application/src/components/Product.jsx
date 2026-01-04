import React, { memo } from 'react';
import { Typography, ListItem, ListItemText } from '@mui/material';

const Product = memo(({ name, desc, price, isFree }) => (
    <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary={name} secondary={desc} />
        <Typography
            sx={{ pl: '15px', color: isFree ? 'success.main' : 'inherit', fontWeight: 'bold' }}
            variant="body2"
        >
            {price}
        </Typography>
    </ListItem>
));

Product.displayName = 'Product';

export default Product;
