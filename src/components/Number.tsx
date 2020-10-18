import React from 'react';
import { FormattedNumber } from 'react-intl';

type NumberProps = {
  value?: number | null;
};

export const Number = ({ value }: NumberProps) => {
  if (value === undefined || value === null) {
    return <>N/A</>;
  }

  return <FormattedNumber value={value} />;
};
