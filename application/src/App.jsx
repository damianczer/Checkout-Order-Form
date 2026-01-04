import React, { useState, memo, useCallback, useMemo } from 'react';
import { reduxForm, touch } from 'redux-form';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import PersonalData from './components/PersonalData';
import ProductSummary from './components/ProductSummary';
import AddressData from './components/AddressData';
import PaymentData from './components/PaymentData';
import Summary from './components/Summary';
import ThankYouPage from './components/ThankYouPage';
import { CHECKOUT_STEPS, FORM_FIELDS } from './constants/config';
import './App.css';

const selectFormData = createSelector(
  state => state.form.contactForm?.values,
  formData => formData || {}
);

const App = ({ handleSubmit, valid, dispatch }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const formData = useSelector(selectFormData);
  const { t } = useTranslation();

  const steps = useMemo(() => CHECKOUT_STEPS.map(step => t(`checkout.steps.${step.key}`)), [t]);

  const submit = useCallback((values) => {
    console.log('Form submitted:', values);
  }, []);

  const handleNext = useCallback(() => {
    dispatch(touch('contactForm', ...FORM_FIELDS));

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
  }, [activeStep, dispatch, formData.captchaToken, steps.length, valid]);

  const handleBack = useCallback(() => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }, []);

  const getStepContent = useCallback((step) => {
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
        return <Typography variant="h6" align="center">{t('common.error')}</Typography>;
    }
  }, [formData, t]);

  if (orderCompleted) {
    return <ThankYouPage />;
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} sx={{ mt: 1, height: { xs: 'auto', lg: 'calc(100vh - 175px)' }, px: '0px', mb: { xs: '220px', sm: '100px', md: '110px', lg: '95px' } }}>
        <Grid item xs={12} lg={3} sx={{ height: { xs: 'auto', lg: '100%' } }}>
          <ProductSummary />
        </Grid>
        <Grid item xs={12} lg={9}>
          <Paper
            variant="outlined"
            sx={{
              p: { xs: 2 },
              height: '100%',
              width: { xs: 'calc(100% - 60px)', lg: 'calc(100% - 5px)' },
              ml: { xs: '30px', lg: '-25px' },
              mr: { xs: '30px', lg: '30px' },
              mb: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Typography variant="h5" align="center">
                {t('checkout.title')}
              </Typography>
              <Stepper
                activeStep={activeStep}
                sx={{
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'center', md: 'center' },
                  width: '100%',
                  maxWidth: 700,
                  margin: '0 auto',
                  pt: 3,
                  pb: 5,
                  '& .MuiStepConnector-root': {
                    display: { xs: 'none', md: 'block' },
                    top: '50%',
                    transform: 'translateY(-50%)'
                  },
                  '& .MuiStepConnector-line': {
                    borderTopWidth: 2
                  },
                  '& .MuiStep-root': {
                    px: { xs: 0, md: 2 },
                    py: { xs: 0.5, md: 0 }
                  }
                }}>
                {steps.map((label, index) => (
                  <Step key={index} sx={
                    {
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
                    {t('common.back')}
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mx: 1, width: '100px' }}
                  >
                    {activeStep === steps.length - 1 ? t('common.buy') : t('common.next')}
                  </Button>
                </Box>
              </form>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default reduxForm({
  form: 'contactForm',
  destroyOnUnmount: false,
  enableReinitialize: true
})(memo(App));
