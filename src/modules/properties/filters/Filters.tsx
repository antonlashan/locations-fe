import { Grid } from '@material-ui/core';
import React from 'react';

import { CustomSelect } from '../../../components/CustomSelect';
import { FilterType } from '../interface';
import { bathroomOpts, bedroomOpts, propertyTypeOpts } from './filterData';

export interface FiltersProps {
  onFilter: (data: FilterType) => void;
}

export const Filters = ({ onFilter }: FiltersProps) => {
  const [values, setValues] = React.useState<FilterType>({
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
  });

  const handleChange = (prop: keyof FilterType) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const vals = { ...values, [prop]: event.target.value };
    setValues(vals);
    onFilter(vals);
  };

  return (
    <Grid container spacing={2} item>
      <Grid item xs={12} md={12}>
        <CustomSelect
          options={propertyTypeOpts}
          label='PropertyType'
          id='propertyType'
          value={values.propertyType}
          onChange={handleChange('propertyType')}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <CustomSelect
          options={bedroomOpts}
          label='Bedrooms'
          id='bedrooms'
          value={values.bedrooms}
          onChange={handleChange('bedrooms')}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <CustomSelect
          options={bathroomOpts}
          label='Bathrooms'
          id='bathrooms'
          value={values.bathrooms}
          onChange={handleChange('bathrooms')}
        />
      </Grid>
    </Grid>
  );
};
