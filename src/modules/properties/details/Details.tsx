import { Button, Drawer, Typography } from '@material-ui/core';
import React from 'react';

import { PropertyData } from '../interface';

interface DetailsProps {
  propertyData: PropertyData[];
}

export const Details = ({ propertyData }: DetailsProps) => {
  // const {propertyType, bedrooms,bathrooms} = propertyData;
  const [state, setState] = React.useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleDetailDrawer = (open: boolean) => (
    _: React.KeyboardEvent | React.MouseEvent
  ) => {
    setState(open);
    // console.log(propertyData);
  };

  React.useEffect(() => {
    console.log(propertyData);
  }, [propertyData]);

  return (
    <>
      <Typography variant='h5'>Details</Typography>
      <Button onClick={toggleDetailDrawer(true)}>Button</Button>
      <Drawer open={state} onClose={toggleDetailDrawer(false)}>
        test
      </Drawer>
    </>
  );
};
