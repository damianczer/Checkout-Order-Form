import React from 'react';
import { Typography, ListItem, ListItemText } from '@mui/material';

const Product = ({ name, desc, price }) => (
    <ListItem sx={{ py: 1, px: 0 }}>
        <ListItemText primary={name} secondary={desc} />
        <Typography sx={{ pl: '15px' }} variant="body2">{price}</Typography>
    </ListItem>
);

export default Product;
