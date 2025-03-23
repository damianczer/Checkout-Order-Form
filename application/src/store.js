import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

const store = configureStore({
  reducer: {
    form: formReducer
  }
});

export default store;
