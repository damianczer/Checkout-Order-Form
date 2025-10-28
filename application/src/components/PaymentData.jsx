import React, { memo } from 'react';
import { Field, reduxForm } from 'redux-form';
import Container from '../controls/Container';
import Text from '../controls/Text';
import Wrapper from '../controls/Wrapper';
import Label from '../controls/Label';
import Iban from '../controls/Iban';
import Bic from '../controls/Bic';
import DatePicker from '../controls/DatePicker';
import { required, iban, bic, onlyLetters } from '../validation';

const PaymentData = () => {
  return (
    <Container>
      <Wrapper>
        <Label>Bank Account Holder: *</Label>
        <Field
          name="bankAccountHolder"
          component={Text}
          validate={[required, onlyLetters]}
        />
      </Wrapper>
      <Wrapper>
        <Label>IBAN: *</Label>
        <Field
          name="iban"
          component={Iban}
          validate={[required, iban]}
        />
      </Wrapper>
      <Wrapper>
        <Label>BIC: *</Label>
        <Field
          name="bic"
          component={Bic}
          validate={[required, bic]}
          normalize={value => value && value.toUpperCase()}
        />
      </Wrapper>
      <Wrapper>
        <Label>Payment Date: *</Label>
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
