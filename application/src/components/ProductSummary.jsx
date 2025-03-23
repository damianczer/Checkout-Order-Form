import React from 'react';
import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import Product from './Product';

const ProductSummary = () => (
    <Paper
        variant="outlined"
        sx={{
            my: { xs: 0, md: 0 },
            p: { xs: 2, md: 3 },
            height: '100%',
            backgroundColor: '#f7f9ff',
            m: '30px'
        }}
    >
        <Typography variant="h5" gutterBottom>
            Order summary
        </Typography>
        <List disablePadding>
            <Product name="DC Platform (Premium+)" desc="Monthly subscription" price="$14.99" />
            <Product name="Software package" desc="License" price="$9.99" />
            <Product name="Service launch" desc="One-time service start-up" price="$4.99" />
            <Product name="Base Support" desc="Included in subscription plan" price="Free" />
            <ListItem sx={{ py: 1, px: 0, mt: 3 }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    $29.97
                </Typography>
            </ListItem>
        </List>
    </Paper>
);

export default ProductSummary;
