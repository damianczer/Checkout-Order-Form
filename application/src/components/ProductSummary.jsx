import React, { memo } from 'react';
import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Product from './Product';
import { PRODUCTS, TOTAL_FORMATTED } from '../constants/products';

const ProductSummary = () => {
    const { t } = useTranslation();

    return (
        <Paper
            variant="outlined"
            sx={{
                my: { xs: 0, md: 0 },
                p: { xs: 2, md: 3 },
                height: { xs: 'auto', lg: '100%' },
                backgroundColor: 'background.blueLight',
                m: '30px',
                display: 'flex',
                flexDirection: 'column',
                '& .MuiTypography-h5': {
                    fontSize: { xs: '1.5rem', lg: '1.2rem', xl: '1.5rem' }
                },
                '& .MuiListItemText-primary': {
                    fontSize: { xs: '1rem', lg: '0.8rem', xl: '1rem' }
                },
                '& .MuiListItemText-secondary': {
                    fontSize: { xs: '0.875rem', lg: '0.7rem', xl: '0.875rem' }
                },
                '& .MuiTypography-body2': {
                    fontSize: { xs: '0.875rem', lg: '0.75rem', xl: '0.875rem' }
                }
            }}
        >
            <Typography variant="h5" gutterBottom>
                {t('products.orderSummary')}
            </Typography>
            <List disablePadding>
                {PRODUCTS.map((product) => (
                    <Product
                        key={product.id}
                        name={t(product.nameKey)}
                        desc={t(product.descKey)}
                        price={product.isFree ? t('common.free') : product.priceFormatted}
                        isFree={product.isFree}
                    />
                ))}
                <ListItem sx={{ py: 1, px: 0, mt: 3 }}>
                    <ListItemText primary={t('products.total')} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {TOTAL_FORMATTED}
                    </Typography>
                </ListItem>
            </List>
            <Typography
                variant="caption"
                sx={{
                    display: 'block',
                    mt: 'auto',
                    pt: 3,
                    color: 'text.secondary',
                    fontSize: { xs: '0.7rem', lg: '0.6rem', xl: '0.7rem' },
                    lineHeight: 1.4
                }}
            >
                * {t('products.disclaimer')}
            </Typography>
        </Paper>
    );
};

export default memo(ProductSummary);
