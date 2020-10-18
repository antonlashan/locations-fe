import React from 'react';
import { FormattedNumber } from 'react-intl';

import { CURRENCY } from '../helpers/config';

type CurrencyProps = {
  value?: number | null;
};

export const Currency = ({ value }: CurrencyProps) => {
  if (value === undefined || value === null) {
    return <>N/A</>;
  }

  return (
    <FormattedNumber value={value} style={`currency`} currency={CURRENCY} />
  );
};
