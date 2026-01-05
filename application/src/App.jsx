import React, { useState, memo, useCallback, useMemo, lazy, Suspense, useRef, useEffect } from 'react';
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
import CircularProgress from '@mui/material/CircularProgress';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductSummary from './components/ProductSummary';
import { CHECKOUT_STEPS, FORM_FIELDS } from './constants/config';
import './App.css';

const PersonalData = lazy(() => import('./components/PersonalData'));
const AddressData = lazy(() => import('./components/AddressData'));
const PaymentData = lazy(() => import('./components/PaymentData'));
const Summary = lazy(() => import('./components/Summary'));
const ThankYouPage = lazy(() => import('./components/ThankYouPage'));

const LoadingFallback = () => (
  <Box
    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}
    role="status"
    aria-label="Loading"
  >
    <CircularProgress aria-hidden="true" />
  </Box>
);

const selectFormData = createSelector(
  state => state.form.contactForm?.values,
  formData => formData || {}
);

const App = ({ handleSubmit, valid, dispatch }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const formData = useSelector(selectFormData);
  const { t } = useTranslation();
  const mainRef = useRef(null);
  const stepHeadingRef = useRef(null);

  const steps = useMemo(() => CHECKOUT_STEPS.map(step => t(`checkout.steps.${step.key}`)), [t]);

  useEffect(() => {
    if (stepHeadingRef.current && activeStep > 0) {
      stepHeadingRef.current.focus();
    }
  }, [activeStep]);

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
        return <Suspense fallback={<LoadingFallback />}><PersonalData formData={formData} /></Suspense>;
      case 1:
        return <Suspense fallback={<LoadingFallback />}><AddressData /></Suspense>;
      case 2:
        return <Suspense fallback={<LoadingFallback />}><PaymentData /></Suspense>;
      case 3:
        return <Suspense fallback={<LoadingFallback />}><Summary formData={formData} /></Suspense>;
      default:
        return <Typography variant="body1" align="center">{t('common.error')}</Typography>;
    }
  }, [formData, t]);

  if (orderCompleted) {
    return <Suspense fallback={<LoadingFallback />}><ThankYouPage /></Suspense>;
  }

  return (
    <>
      <CssBaseline />
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          '&:focus': {
            position: 'fixed',
            top: '10px',
            left: '10px',
            width: 'auto',
            height: 'auto',
            padding: '16px',
            backgroundColor: '#ffffff',
            color: '#000000',
            zIndex: 9999,
            textDecoration: 'none',
            borderRadius: 1,
            fontWeight: 'bold',
            border: '2px solid #000000',
          }
        }}
      >
        {t('common.skipToMain')}
      </Box>
      <Header />
      <Box
        component="main"
        id="main-content"
        ref={mainRef}
        role="main"
        tabIndex={-1}
        sx={{ outline: 'none' }}
      >
        <Grid container spacing={3} sx={{ mt: 1, height: { xs: 'auto', lg: 'calc(100vh - 175px)' }, px: '0px', mb: { xs: '220px', sm: '100px', md: '110px', lg: '95px' } }}>
          <Grid item xs={12} lg={9} sx={{ order: { xs: 2, lg: 2 } }}>
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
                <Typography
                  variant="h4"
                  component="h1"
                  align="center"
                  ref={stepHeadingRef}
                  tabIndex={-1}
                  sx={{ outline: 'none' }}
                >
                  {t('checkout.title')}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{ mt: 1, color: 'text.secondary' }}
                >
                  {t('checkout.stepOf', { current: activeStep + 1, total: steps.length })}
                </Typography>
                <Stepper
                  activeStep={activeStep}
                  aria-label={t('checkout.progressLabel')}
                  sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
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
                      py: { xs: 0.5, md: 0 },
                      width: { xs: '180px', md: 'auto' },
                    },
                    '& .MuiStepLabel-root': {
                      flexDirection: { xs: 'row', md: 'column' },
                    },
                    '& .MuiStepLabel-iconContainer': {
                      pr: { xs: 1, md: 0 },
                      pb: { xs: 0, md: 1 },
                    }
                  }}>
                  {steps.map((label, index) => (
                    <Step
                      key={index}
                      aria-current={index === activeStep ? 'step' : undefined}
                      sx={{
                        '& .MuiStepLabel-root .Mui-completed': { color: 'green' }
                      }}
                    >
                      <StepLabel sx={{ color: 'grey' }}>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <form
                  onSubmit={handleSubmit(submit)}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}
                  aria-label={t('checkout.title')}
                >
                  <Box aria-live="polite" aria-atomic="true">
                    {getStepContent(activeStep)}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }} role="group" aria-label="Form navigation">
                    <Button
                      variant="contained"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mx: 1, width: '100px' }}
                      aria-label={`${t('common.back')} ${activeStep > 0 ? t(`checkout.steps.${CHECKOUT_STEPS[activeStep - 1]?.key || ''}`) : ''}`}
                    >
                      {t('common.back')}
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mx: 1, width: '100px' }}
                      aria-label={activeStep === steps.length - 1 ? t('common.buy') : `${t('common.next')} ${t(`checkout.steps.${CHECKOUT_STEPS[activeStep + 1]?.key || ''}`)}`}
                    >
                      {activeStep === steps.length - 1 ? t('common.buy') : t('common.next')}
                    </Button>
                  </Box>
                </form>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={3} sx={{ height: { xs: 'auto', lg: '100%' }, order: { xs: 2, lg: 1 } }}>
            <ProductSummary />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default reduxForm({
  form: 'contactForm',
  destroyOnUnmount: false,
  enableReinitialize: true
})(memo(App));
