import React, { memo } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import Container from '../controls/Container';
import Text from '../controls/Text';
import Wrapper from '../controls/Wrapper';
import Label from '../controls/Label';
import Iban from '../controls/Iban';
import Bic from '../controls/Bic';
import DatePicker from '../controls/DatePicker';
import { required, iban, bic, onlyLetters } from '../validation';

const PaymentData = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrapper>
        <Label htmlFor="bankAccountHolder">{t('paymentData.bankAccountHolder')} *</Label>
        <Field
          name="bankAccountHolder"
          component={Text}
          validate={[required, onlyLetters]}
        />
      </Wrapper>
      <Wrapper>
        <Label htmlFor="iban">{t('paymentData.iban')} *</Label>
        <Field
          name="iban"
          component={Iban}
          validate={[required, iban]}
        />
      </Wrapper>
      <Wrapper>
        <Label htmlFor="bic">{t('paymentData.bic')} *</Label>
        <Field
          name="bic"
          component={Bic}
          validate={[required, bic]}
          normalize={value => value && value.toUpperCase()}
        />
      </Wrapper>
      <Wrapper>
        <Label htmlFor="paymentDate">{t('paymentData.paymentDate')} *</Label>
        <Field
          name="paymentDate"
          component={DatePicker}
          validate={[required]}
        />
      </Wrapper>
    </Container>
  );
};

export default reduxForm({
  form: 'contactForm',
  destroyOnUnmount: false
})(memo(PaymentData));
