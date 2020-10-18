import { Button, Drawer } from '@material-ui/core';
import React from 'react';

import { PropertyData } from '../interface';
import { LatLng, Map } from './Map';

interface DetailsProps {
  propertyData: PropertyData[];
}

export const Details = ({ propertyData }: DetailsProps) => {
  const [state, setState] = React.useState(false);
  const [locations, setLocations] = React.useState<LatLng[]>([]);
  const toggleDetailDrawer = (open: boolean) => () => {
    setState(open);
  };

  React.useEffect(() => {
    const locs = propertyData.reduce((locArr: LatLng[], name) => {
      locArr.push({ lat: name.lat, lng: name.lon });
      return locArr;
    }, []);
    setLocations(locs);
  }, [propertyData]);

  return (
    <>
      <Map locations={locations} />
      <Button onClick={toggleDetailDrawer(true)}>Button</Button>
      <Drawer open={state} onClose={toggleDetailDrawer(false)}>
        test
      </Drawer>
    </>
  );
};
