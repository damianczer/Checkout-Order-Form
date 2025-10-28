import React, { useState, memo } from 'react';
import { reduxForm, touch } from 'redux-form';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import PersonalData from './components/PersonalData';
import Copyright from './components/Copyright';
import ProductSummary from './components/ProductSummary';
import AddressData from './components/AddressData';
import PaymentData from './components/PaymentData';
import Summary from './components/Summary';
import ThankYouPage from './components/ThankYouPage';
import './App.css';

const steps = ['Personal Data', 'Shipping Address', 'Payment Details', 'Summary'];

const selectFormData = createSelector(
  state => state.form.contactForm?.values,
  formData => formData || {}
);

const App = ({ handleSubmit, valid, dispatch }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const formData = useSelector(selectFormData);

  const allFields = [
    'firstName', 'lastName', 'gender', 'age', 'email', 'phoneNumber',
    'zipcode', 'city', 'street', 'houseNumber', 'country', 'addressLine',
    'bankAccountHolder', 'iban', 'bic', 'paymentDate', 'password', 'repeatPassword',
    'captchaToken'
  ];

  const submit = values => {
  };

  const handleNext = () => {
    dispatch(touch('contactForm', ...allFields));
    
    setTimeout(() => {
      if (activeStep === steps.length - 1 && !formData.captchaToken) {
        return;
      }
      
      if (valid && (activeStep < steps.length - 1 || formData.captchaToken)) {
        if (activeStep === steps.length - 1) {
          setOrderCompleted(true);
        } else {
          setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
      }
    }, 100);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return <PersonalData formData={formData} />;
      case 1:
        return <AddressData />;
      case 2:
        return <PaymentData />;
      case 3:
        return <Summary formData={formData} />;
      default:
        return <Typography variant="h6" align="center">Unknown step</Typography>;
    }
  };

  if (orderCompleted) {
    return <ThankYouPage />;
  }

  return (
    <>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{ position: 'relative' }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            DC Platform
          </Typography>
          <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
            <a
              href="https://www.linkedin.com/in/daczerw"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0077b5' }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://github.com/damianczer"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#333' }}
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} sx={{ mt: 1, height: { xs: 'auto', lg: '85vh' }, px: '0px', pb: { xs: 8, lg: 0 } }}>
        <Grid item xs={12} lg={3} sx={{ height: { xs: 'auto', lg: '100%' } }}>
          <ProductSummary />
        </Grid>
        <Grid item xs={12} lg={9}>
          <Paper
            variant="outlined"
            sx={{
              p: { xs: 2 },
              height: { xs: 'auto', lg: '100%' },
              width: { xs: 'calc(100% - 60px)', lg: 'calc(100% - 5px)' },
              ml: { xs: '30px', lg: '-25px' },
              mr: { xs: '30px', lg: '30px' },
              mb: { xs: 2, lg: '30px' }
            }}
          >
            <Typography variant="h5" align="center">
              Checkout Order
            </Typography>
            <Stepper activeStep={activeStep} sx={{ flexWrap: 'wrap', width: '60%', margin: '0 auto', pt: 3, pb: 5 }}>
              {steps.map(label => (
                <Step key={label} sx={
                  {
                    flexWrap: 'wrap',
                    mt: 1,
                    '& .MuiStepLabel-root .Mui-completed': { color: 'green' }
                  }}>
                  <StepLabel sx={{ color: 'grey' }}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <form onSubmit={handleSubmit(submit)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
                <Button
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mx: 1, width: '100px' }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mx: 1, width: '100px' }}
                >
                  {activeStep === steps.length - 1 ? 'Buy' : 'Next'}
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        mt: { xs: 2, lg: -1 },
        position: { xs: 'relative', lg: 'static' },
        pb: { xs: 2, lg: 0 }
      }}>
        <Copyright />
      </Box>
    </>
  );
};

export default reduxForm({
  form: 'contactForm',
  destroyOnUnmount: false,
  enableReinitialize: true
})(memo(App));
