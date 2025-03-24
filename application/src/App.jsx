import React, { useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ProductSummary from './components/ProductSummary';
import { reduxForm } from 'redux-form';
import Grid from '@mui/material/Grid'; // Revert to stable Grid component
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import PersonalData from './components/PersonalData';
import './App.css';
import Copyright from './components/Copyright';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Box from '@mui/material/Box';

const steps = ['Personal Data', 'Shipping Address', 'Payment Details', 'Review Order'];

const selectFormData = createSelector(
  state => state.form.checkoutForm?.values,
  formData => formData || {}
);

const App = ({ handleSubmit }) => {
  const [activeStep, setActiveStep] = useState(0);
  const formData = useSelector(selectFormData);

  console.log(formData);

  const submit = values => {
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return <PersonalData formData={formData} />;
      default:
        throw new Error('Unknown step');
    }
  };

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
          <a
            href="https://www.linkedin.com/in/daczerw"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: 'auto', color: '#0077b5' }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} sx={{ mt: 1, height: '85vh', px: '0px' }}>
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
              mb: '30px'
            }}
          >
            <Typography variant="h5" align="center">
              Checkout Order
            </Typography>
            <Stepper activeStep={activeStep} sx={{ flexWrap: 'wrap', width: '60%', margin: '0 auto', pt: 3, pb: 5 }}>
              {steps.map(label => (
                <Step key={label} sx={{ flexWrap: 'wrap', mt: 1 }}>
                  <StepLabel>{label}</StepLabel>
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
        <Copyright />
      </Grid>

    </>
  );
};

export default reduxForm({
  form: 'checkoutForm',
  destroyOnUnmount: false
})(memo(App));
