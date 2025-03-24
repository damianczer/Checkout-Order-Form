import React, { memo } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, MenuItem, Box } from '@mui/material';
import TextField from '../controls/TextField';
import Select from '../controls/Select';
import Checkbox from '../controls/Checkbox';
import Label from '../controls/Label';
import Wrapper from '../controls/Wrapper';
import PhoneNumberField from '../controls/PhoneNumberField';
import {
  required,
  email as emailValidation,
  onlyLetters,
  phoneNumber,
  strongPassword,
  equalsPassword
} from '../validation';

const PersonalData = ({ formData }) => {
  return (
    <Box sx={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }
    }
    >
      <Grid
        container
        spacing={1}
        sx={
          {
            maxWidth: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '30px'
          }
        }
      >
        <Wrapper>
          <Label>First Name: *</Label>
          <Field
            name="firstName"
            component={TextField}
            validate={[required, onlyLetters]}
          />
        </Wrapper>
        <Wrapper>
          <Label>Last Name: *</Label>
          <Field
            name="lastName"
            component={TextField}
            validate={[required, onlyLetters]}
          />
        </Wrapper>
        <Wrapper>
          <Label>Gender: *</Label>
          <Field
            name="gender"
            component={Select}
            validate={[required]}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Field>
        </Wrapper>
        <Wrapper>
          <Label>Age: *</Label>
          <Field
            name="age"
            component={TextField}
            type="number"
            validate={[required]}
          />
        </Wrapper>
        <Wrapper>
          <Label>E-mail: *</Label>
          <Field
            name="email"
            component={TextField}
            validate={[required, emailValidation]}
          />
        </Wrapper>
        <Wrapper>
          <Label>Phone Number: *</Label>
          <Field
            name="phoneNumber"
            component={PhoneNumberField}
            validate={[required, phoneNumber]}
          />
        </Wrapper>
        <Grid item xs={12}>
          <Field
            name="createAccount"
            component={Checkbox}
            type="checkbox"
            label="I want to create an account."
          />
        </Grid>
        {formData.createAccount && (
          <>
            <Wrapper>
              <Label>Password: *</Label>
              <Field
                name="password"
                component={TextField}
                type="password"
                validate={formData.createAccount ? [required, strongPassword] : []}
              />
            </Wrapper>
            <Wrapper>
              <Label>Repeat Password: *</Label>
              <Field
                name="repeatPassword"
                component={TextField}
                type="password"
                validate={formData.createAccount ? [required, equalsPassword] : []}
              />
            </Wrapper>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default reduxForm({
  form: 'checkoutForm',
  destroyOnUnmount: false
})(memo(PersonalData));
