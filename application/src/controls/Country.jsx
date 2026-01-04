import React, { memo, useEffect, useState, useMemo } from 'react';
import { TextField, MenuItem } from '@mui/material';

const Country = memo(({ input, meta: { touched, error } }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,cca2')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          const countryList = data.map(country => ({
            name: country.name?.common || country.name,
            code: country.cca2 || country.code
          })).filter(country => country.name && country.code);

          setCountries(countryList);
        }
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const menuItems = useMemo(() =>
    countries.map(country => (
      <MenuItem key={country.code} value={country.name}>
        {country.name}
      </MenuItem>
    )), [countries]);

  return (
    <TextField
      select
      {...input}
      error={touched && Boolean(error)}
      helperText={touched && error}
      fullWidth
      size='small'
      margin='none'
      sx={{ width: '90%', fontSize: '12px' }}
      SelectProps={{
        MenuProps: {
          PaperProps: {
            style: {
              maxHeight: 48 * 5 + 8,
              width: 250,
            },
          },
        },
      }}
    >
      {menuItems}
    </TextField>
  );
});

Country.displayName = 'Country';

export default Country;
