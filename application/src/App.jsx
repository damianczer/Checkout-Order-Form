import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ProductSummary from './components/ProductSummary';
import { reduxForm } from 'redux-form';
import Grid from '@mui/material/Grid';
import './App.css';
import Copyright from './components/Copyright';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const App = ({ handleSubmit }) => {

  const submit = values => {
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
            <>
              <form onSubmit={handleSubmit(submit)}>
              </form>
            </>
          </Paper>
        </Grid>
      </Grid>
      <Copyright />
    </>
  );
};

export default reduxForm({
  form: 'checkoutForm',
  destroyOnUnmount: false
})(App);
