import React, { memo, useMemo } from 'react';
import {
  Box,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  useTheme
} from '@mui/material';
import {
  CheckCircleOutline as CheckIcon,
  Email as EmailIcon,
  CalendarToday as CalendarIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { PRODUCTS, TOTAL_FORMATTED } from '../constants/products';

const ThankYouPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const orderNumber = useMemo(() =>
    Math.random().toString(36).substr(2, 9).toUpperCase(),
    []
  );
  const currentDate = useMemo(() =>
    new Date().toLocaleDateString(),
    []
  );

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: 'background.default',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{
        background: isDarkMode
          ? 'linear-gradient(135deg, #2d4a6f 0%, #3d5a80 100%)'
          : 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
        color: '#fff',
        py: { xs: 4, md: 6 },
        px: 2,
        textAlign: 'center'
      }}>
        <CheckIcon sx={{ fontSize: { xs: 60, md: 80 }, mb: 2 }} />
        <Typography variant="h3" component="h1" sx={{
          fontWeight: 'bold',
          mb: 1,
          fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' }
        }}>
          {t('thankYou.title')}
        </Typography>
        <Typography variant="h6" sx={{
          opacity: 0.9,
          fontSize: { xs: '0.9rem', md: '1.25rem' }
        }}>
          {t('thankYou.subtitle')}
        </Typography>
      </Box>

      <Box sx={{
        flex: 1,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        maxWidth: 1200,
        mx: 'auto',
        width: '100%',
        p: { xs: 2, sm: 3, md: 4 },
        gap: { xs: 3, md: 4 },
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ mb: { xs: 3, md: 4 } }}>
            <Typography variant="h5" sx={{
              fontWeight: 'bold',
              mb: 2,
              color: 'text.primary',
              fontSize: { xs: '1.1rem', md: '1.5rem' }
            }}>
              {t('thankYou.orderDetails')}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, flexWrap: 'wrap', gap: 1 }}>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                {t('thankYou.orderNumber')}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, fontWeight: 'bold', color: 'text.primary' }}>
                {orderNumber}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, flexWrap: 'wrap', gap: 1 }}>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                {t('thankYou.date')}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: 'text.primary' }}>
                {currentDate}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
                {t('thankYou.total')}
              </Typography>
              <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                {TOTAL_FORMATTED}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: { xs: 2, md: 3 } }} />

          <Typography variant="h5" sx={{
            fontWeight: 'bold',
            mb: 2,
            color: 'text.primary',
            fontSize: { xs: '1.1rem', md: '1.5rem' }
          }}>
            {t('thankYou.orderItems')}
          </Typography>
          <List disablePadding>
            {PRODUCTS.map((product) => (
              <ListItem key={product.id} sx={{ px: 0, py: { xs: 0.5, md: 1 }, flexWrap: 'wrap' }}>
                <ListItemText
                  primary={t(product.nameKey) || product.name}
                  secondary={t(product.descKey) || product.description}
                  primaryTypographyProps={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: 'text.primary' }}
                  secondaryTypographyProps={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                  sx={{ flex: '1 1 auto', minWidth: 0 }}
                />
                <Typography
                  variant="body1"
                  color={product.isFree ? 'success.main' : 'text.primary'}
                  sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, flexShrink: 0 }}
                >
                  {product.isFree ? t('products.free') : product.priceFormatted}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{
          flex: 1,
          backgroundColor: 'background.paper',
          borderRadius: 2,
          p: { xs: 2, sm: 3, md: 4 }
        }}>
          <Typography variant="h5" sx={{
            fontWeight: 'bold',
            mb: { xs: 2, md: 3 },
            color: 'text.primary',
            fontSize: { xs: '1.1rem', md: '1.5rem' }
          }}>
            {t('thankYou.whatsNext')}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: { xs: 2, md: 3 } }}>
            <EmailIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main', mr: 2, flexShrink: 0 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.25rem' }, color: 'text.primary' }}>
                {t('thankYou.checkEmail')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                {t('thankYou.checkEmailDesc')}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: { xs: 3, md: 4 } }}>
            <CalendarIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'primary.main', mr: 2, flexShrink: 0 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.25rem' }, color: 'text.primary' }}>
                {t('thankYou.serviceActivation')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                {t('thankYou.serviceActivationDesc')}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: { xs: 2, md: 3 } }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={() => window.location.reload()}
              sx={{ py: { xs: 1, md: 1.5 } }}
            >
              {t('thankYou.placeAnotherOrder')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              sx={{ py: { xs: 1, md: 1.5 } }}
            >
              {t('thankYou.downloadReceipt')}
            </Button>
          </Box>

          <Typography variant="body2" sx={{ mt: 3, textAlign: 'center', color: 'text.secondary', fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
            {t('thankYou.contactSupport')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(ThankYouPage);
