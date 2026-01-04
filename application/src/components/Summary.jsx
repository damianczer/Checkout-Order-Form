import { memo, useCallback } from 'react';
import { ListItem, ListItemText, Grid, Box } from '@mui/material';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import Container from '../controls/Container';

const Summary = ({ formData, change }) => {
  const { t } = useTranslation();

  const handleCaptchaVerify = useCallback((token) => {
    change('captchaToken', token);
  }, [change]);

  const handleCaptchaExpire = useCallback(() => {
    change('captchaToken', null);
  }, [change]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <ListItem>
            <ListItemText primary={t('personalData.firstName')} secondary={formData.firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('personalData.lastName')} secondary={formData.lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('personalData.gender')} secondary={formData.gender} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('personalData.age')} secondary={formData.age} />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ListItem>
            <ListItemText primary={t('personalData.email')} secondary={formData.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('personalData.phoneNumber')} secondary={formData.phoneNumber} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('addressData.zipcode')} secondary={formData.zipcode} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('addressData.city')} secondary={formData.city} />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ListItem>
            <ListItemText primary={t('addressData.street')} secondary={formData.street} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('addressData.houseNumber')} secondary={formData.houseNumber} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('addressData.country')} secondary={formData.country} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('addressData.addressLine')} secondary={formData.addressLine} />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ListItem>
            <ListItemText primary={t('paymentData.bankAccountHolder')} secondary={formData.bankAccountHolder} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('paymentData.iban')} secondary={formData.iban} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('paymentData.bic')} secondary={formData.bic} />
          </ListItem>
          <ListItem>
            <ListItemText primary={t('paymentData.paymentDate')} secondary={formData.paymentDate ? formData.paymentDate.toLocaleDateString() : ''} />
          </ListItem>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3, width: '100%' }}>
        <HCaptcha
          sitekey="473e87ac-ba4c-4816-a922-e6ae435c40c6"
          onVerify={handleCaptchaVerify}
          onExpire={handleCaptchaExpire}
        />
        {!formData.captchaToken && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '8px', textAlign: 'center' }}>
            {t('summary.captchaRequired')}
          </div>
        )}
      </Box>
    </Container>
  );
};

export default reduxForm({
  form: 'contactForm',
  destroyOnUnmount: false
})(memo(Summary));
