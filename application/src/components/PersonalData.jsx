import React, { memo } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, MenuItem } from '@mui/material';
import Text from '../controls/Text';
import Select from '../controls/Select';
import Checkbox from '../controls/Checkbox';
import Label from '../controls/Label';
import Wrapper from '../controls/Wrapper';
import Phone from '../controls/Phone';
import Container from '../controls/Container';
import {
  required,
  email,
  onlyLetters,
  phoneNumber,
  strongPassword,
  equalsPassword,
  age
} from '../validation';

const PersonalData = ({ formData }) => {
  return (
    <Container>
      <Wrapper>
        <Label>First Name: *</Label>
        <Field
          name="firstName"
          component={Text}
          validate={[required, onlyLetters]}
        />
      </Wrapper>
      <Wrapper>
        <Label>Last Name: *</Label>
        <Field
          name="lastName"
          component={Text}
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
          component={Text}
          type="number"
          validate={[required, age]}
        />
      </Wrapper>
      <Wrapper>
        <Label>E-mail: *</Label>
        <Field
          name="email"
          component={Text}
          validate={[required, email]}
        />
      </Wrapper>
      <Wrapper>
        <Label>Phone Number: *</Label>
        <Field
          name="phoneNumber"
          component={Phone}
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
              component={Text}
              type="password"
              validate={formData.createAccount ? [required, strongPassword] : []}
            />
          </Wrapper>
          <Wrapper>
            <Label>Repeat Password: *</Label>
            <Field
              name="repeatPassword"
              component={Text}
              type="password"
              validate={formData.createAccount ? [required, equalsPassword] : []}
            />
          </Wrapper>
        </>
      )}
    </Container>
  );
};

export default reduxForm({
  form: 'contactForm',
  destroyOnUnmount: false,
  enableReinitialize: true
})(memo(PersonalData));
