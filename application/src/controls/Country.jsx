import React, { useEffect, useState } from 'react';
import { TextField, MenuItem } from '@mui/material';

const Country = ({ input, meta: { touched, error } }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countryList = data.map(country => ({
          name: country.name.common,
          code: country.cca2
        }));
        setCountries(countryList);
      });
  }, []);

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
      {countries.map(country => (
        <MenuItem key={country.code} value={country.name}>
          {country.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Country;
