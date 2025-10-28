import { memo } from 'react';
import { ListItem, ListItemText, Grid, Box } from '@mui/material';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { reduxForm } from 'redux-form';
import Container from '../controls/Container';

const CaptchaField = ({ input, meta: { touched, error }, change }) => {
  const handleVerify = (token) => {
    input.onChange(token);
  };

  const handleExpire = () => {
    input.onChange(null);
  };

  return (
    <div>
      <HCaptcha 
        sitekey="473e87ac-ba4c-4816-a922-e6ae435c40c6" 
        onVerify={handleVerify}
        onExpire={handleExpire}
      />
      {touched && error && (
        <div style={{ color: 'red', fontSize: '12px', marginTop: '8px' }}>
          {error}
        </div>
      )}
    </div>
  );
};

const Summary = ({ formData, change }) => {
  const handleCaptchaVerify = (token) => {
    change('captchaToken', token);
  };

  const handleCaptchaExpire = () => {
    change('captchaToken', null);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <ListItem>
            <ListItemText primary="First Name:" secondary={formData.firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name:" secondary={formData.lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Gender:" secondary={formData.gender} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Age:" secondary={formData.age} />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ListItem>
            <ListItemText primary="E-mail:" secondary={formData.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone Number:" secondary={formData.phoneNumber} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Zipcode:" secondary={formData.zipcode} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City:" secondary={formData.city} />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ListItem>
            <ListItemText primary="Street:" secondary={formData.street} />
          </ListItem>
          <ListItem>
            <ListItemText primary="House Number:" secondary={formData.houseNumber} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Country:" secondary={formData.country} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Address Line:" secondary={formData.addressLine} />
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ListItem>
            <ListItemText primary="Bank Account Holder:" secondary={formData.bankAccountHolder} />
          </ListItem>
          <ListItem>
            <ListItemText primary="IBAN:" secondary={formData.iban} />
          </ListItem>
          <ListItem>
            <ListItemText primary="BIC:" secondary={formData.bic} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Payment Date:" secondary={formData.paymentDate ? formData.paymentDate.toLocaleDateString() : ''} />
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
            Please complete the captcha verification to proceed.
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
