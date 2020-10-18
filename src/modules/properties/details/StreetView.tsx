import {
  GoogleMap,
  StreetViewPanorama,
  useLoadScript,
} from '@react-google-maps/api';
import React from 'react';

import { env } from '../../../environments/env';

interface StreetViewProps {
  lat: number;
  lng: number;
}

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '300px',
};

export const StreetView = ({ lat, lng }: StreetViewProps) => {
  const [map, setMap] = React.useState<google.maps.Map<Element> | null>(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: env.googleMapApiKey,
  });

  const handleMapLoad = (map: google.maps.Map<Element>) => {
    setMap(map);
  };

  const handleMapUnmount = () => {
    map?.unbindAll();
  };

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={handleMapLoad}
        onUnmount={handleMapUnmount}
      >
        <StreetViewPanorama
          options={{
            position: { lat, lng },
            visible: true,
            enableCloseButton: false,
          }}
        />
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <div>Loading</div>;
};
