import React, { memo } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import Text from '../controls/Text';
import Wrapper from '../controls/Wrapper';
import Label from '../controls/Label';
import Country from '../controls/Country';
import { required, onlyLetters, zipcode, houseNumber } from '../validation';
import Zipcode from '../controls/Zipcode';
import Container from '../controls/Container';

const AddressData = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Label>{t('addressData.zipcode')} *</Label>
        <Field
          name="zipcode"
          component={Zipcode}
          validate={[required, zipcode]}
        />
      </Wrapper>
      <Wrapper>
        <Label>{t('addressData.city')} *</Label>
        <Field
          name="city"
          component={Text}
          validate={[required, onlyLetters]}
        />
      </Wrapper>
      <Wrapper>
        <Label>{t('addressData.street')} *</Label>
        <Field
          name="street"
          component={Text}
          validate={[required, onlyLetters]}
        />
      </Wrapper>
      <Wrapper>
        <Label>{t('addressData.houseNumber')} *</Label>
        <Field
          name="houseNumber"
          type="number"
          component={Text}
          validate={[required, houseNumber]}
        />
      </Wrapper>
      <Wrapper>
        <Label>{t('addressData.country')} *</Label>
        <Field
          name="country"
          component={Country}
          validate={[required]}
        />
      </Wrapper>
      <Wrapper>
        <Label>{t('addressData.addressLine')}</Label>
        <Field
          name="addressLine"
          component={Text}
        />
      </Wrapper>
    </Container>
  );
};

export default reduxForm({
  form: 'contactForm',
  destroyOnUnmount: false
})(memo(AddressData));
