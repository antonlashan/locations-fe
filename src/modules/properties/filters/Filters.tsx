import { Grid } from '@material-ui/core';
import React from 'react';

import { CustomSelect } from '../../../components/CustomSelect';
import { FiltersState } from '../interface';
import { bathroomOpts, bedroomOpts, propertyTypeOpts } from './filterData';

interface FiltersProps {
  onFilter: (data: FiltersState) => void;
}

export const Filters = ({ onFilter }: FiltersProps) => {
  const [values, setValues] = React.useState<FiltersState>({
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
  });

  const handleChange = (prop: keyof FiltersState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const vals = { ...values, [prop]: event.target.value };
    setValues(vals);
    onFilter(vals);
  };

  React.useEffect(() => {
    onFilter(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <Grid container spacing={2} item>
      <Grid item xs={12} md={12}>
        <CustomSelect
          options={propertyTypeOpts}
          label='PropertyType'
          value={values.propertyType}
          onChange={handleChange('propertyType')}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <CustomSelect
          options={bedroomOpts}
          label='Bedrooms'
          value={values.bedrooms}
          onChange={handleChange('bedrooms')}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <CustomSelect
          options={bathroomOpts}
          label='Bathrooms'
          value={values.bathrooms}
          onChange={handleChange('bathrooms')}
        />
      </Grid>
    </Grid>
  );
};
