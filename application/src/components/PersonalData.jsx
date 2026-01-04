import React, { memo } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Label>{t('personalData.firstName')} *</Label>
        <Field
          name="firstName"
          component={Text}
          validate={[required, onlyLetters]}
        />
      </Wrapper>
      <Wrapper>
        <Label>{t('personalData.lastName')} *</Label>
        <Field
          name="lastName"
          component={Text}
          validate={[required, onlyLetters]}
        />
      </Wrapper>
      <Wrapper>
        <Label>{t('personalData.gender')} *</Label>
        <Field
          name="gender"
          component={Select}
          validate={[required]}
        >
          <MenuItem value="male">{t('personalData.male')}</MenuItem>
          <MenuItem value="female">{t('personalData.female')}</MenuItem>
        </Field>
      </Wrapper>
      <Wrapper>
        <Label>{t('personalData.age')} *</Label>
        <Field
          name="age"
          component={Text}
          type="number"
          validate={[required, age]}
        />
      </Wrapper>
      <Wrapper>
        <Label>{t('personalData.email')} *</Label>
        <Field
          name="email"
          component={Text}
          validate={[required, email]}
        />
      </Wrapper>
      <Wrapper>
        <Label>{t('personalData.phoneNumber')} *</Label>
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
          label={t('personalData.createAccount')}
        />
      </Grid>
      {formData.createAccount && (
        <>
          <Wrapper>
            <Label>{t('personalData.password')} *</Label>
            <Field
              name="password"
              component={Text}
              type="password"
              validate={formData.createAccount ? [required, strongPassword] : []}
            />
          </Wrapper>
          <Wrapper>
            <Label>{t('personalData.repeatPassword')} *</Label>
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
