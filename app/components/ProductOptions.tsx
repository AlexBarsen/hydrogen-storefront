import React, {useState} from 'react';
import type {Product as ProductType} from '@shopify/hydrogen/storefront-api-types';
import {Box} from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useLocation, useNavigate} from '@remix-run/react';

const ProductOptions = ({
  options,
  searchParamsWithDefaults,
}: {
  options: ProductType['options'];
  searchParamsWithDefaults: URLSearchParams;
}) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const isLocalePathname = /\/[a-zA-Z]{2}-[a-zA-Z]{2}\//g.test(pathname);
  const path = isLocalePathname
    ? `/${pathname.split('/').slice(2).join('/')}`
    : pathname;
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  const handleChange = (event: SelectChangeEvent, optionType: string) => {
    const value = event.target.value;
    if (optionType === 'size') {
      setSize(value);
    } else if (optionType === 'color') {
      setColor(value);
    }
  };

  return (
    <>
      <Box display="flex" marginTop="20px" justifyContent="space-evenly">
        {options.map((option) => (
          <div key={option.name}>
            <FormControl sx={{m: 1, minWidth: 120}}>
              <InputLabel id={option.name + 'label'}>{option.name}</InputLabel>
              <Select
                data-testid={option.name + '-select'}
                name={option.name}
                id={option.name}
                value={option.name === 'Size' ? size : color}
                label={option.name}
                onChange={(event) =>
                  handleChange(event, option.name === 'Size' ? 'size' : 'color')
                }
              >
                {option.values.map((value) => {
                  const clonedSearchParams = new URLSearchParams(
                    searchParamsWithDefaults,
                  );
                  clonedSearchParams.set(option.name, value);
                  return (
                    <MenuItem
                      data-testid="select-option"
                      key={`option-${option.name}-${value}`}
                      value={value}
                      onClick={() =>
                        navigate(`${path}?${clonedSearchParams.toString()}`, {
                          preventScrollReset: true,
                        })
                      }
                    >
                      {value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        ))}
      </Box>
    </>
  );
};

export default ProductOptions;
