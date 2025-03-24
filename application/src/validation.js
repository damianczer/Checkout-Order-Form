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
