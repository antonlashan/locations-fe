import { MenuItem, TextField, TextFieldProps } from '@material-ui/core';
import React from 'react';

export type CustomSelectOption = {
  value: string;
  label: string;
};
type CustomSelectProps = {
  options: CustomSelectOption[];
} & TextFieldProps;

export const CustomSelect = (props: CustomSelectProps) => {
  const { options, ...rest } = props;
  return (
    <TextField
      {...rest}
      select
      variant='outlined'
      fullWidth
      size='small'
      SelectProps={{ displayEmpty: true }}
      InputLabelProps={{ shrink: true }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
