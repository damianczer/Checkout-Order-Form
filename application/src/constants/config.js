export const APP_CONFIG = {
    name: 'DC Platform',
    version: '1.0.0',
    author: {
        name: 'Damian Czerwiński',
        website: 'https://www.damianczerwinski.pl',
    },
    hCaptcha: {
        siteKey: '473e87ac-ba4c-4816-a922-e6ae435c40c6',
    },
    api: {
        countries: 'https://restcountries.com/v3.1/all?fields=name,cca2',
    },
};

export const CHECKOUT_STEPS = [
    { key: 'personalData', label: 'Personal Data' },
    { key: 'shippingAddress', label: 'Shipping Address' },
    { key: 'paymentDetails', label: 'Payment Details' },
    { key: 'summary', label: 'Summary' },
];

export const FORM_FIELDS = [
    'firstName',
    'lastName',
    'gender',
    'age',
    'email',
    'phoneNumber',
    'zipcode',
    'city',
    'street',
    'houseNumber',
    'country',
    'addressLine',
    'bankAccountHolder',
    'iban',
    'bic',
    'paymentDate',
    'password',
    'repeatPassword',
    'captchaToken',
];

export const LANGUAGES = [
    { code: 'en', label: 'EN' },
    { code: 'pl', label: 'PL' },
];

export const THEME_MODES = {
    light: 'light',
    dark: 'dark',
};

export default APP_CONFIG;
