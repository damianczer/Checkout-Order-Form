export const required = value => value
  ? undefined
  : 'Required';

export const email = value => value && /[^@]+@[^.]+\..+/.test(value)
  ? undefined
  : 'Invalid email address.';

export const onlyLetters = value => value && /^[a-zA-Z]+$/.test(value)
  ? undefined
  : 'Only letters are allowed.';

export const phoneNumber = value => value && /^[0-9]{3} [0-9]{3} [0-9]{3}$/.test(value)
  ? undefined
  : 'Invalid phone number.';

export const strongPassword = value => value && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
  ? undefined
  : 'Password too weak.';

export const equalsPassword = (value, allValues) => value === allValues.password
  ? undefined
  : 'Passwords do not match.';

export const zipcode = value => value && /^\d{2}-\d{3}$/.test(value)
  ? undefined
  : 'Invalid zipcode format.';

export const age = value => value && (value < 16 || value > 100)
  ? 'Age must be between 16 and 100.'
  : undefined;

export const houseNumber = value => value && value.toString().length > 4
  ? 'House number cannot be longer than 4 digits.'
  : undefined;

export const iban = value => value && /^\d{2} \d{4} \d{4} \d{4} \d{4} \d{4} \d{4}$/.test(value)
  ? undefined
  : 'Invalid IBAN format.';

export const bic = value => value && /^[A-Za-z]{6}[0-9]{2}$/.test(value)
  ? undefined
  : 'Invalid BIC format.';
