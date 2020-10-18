import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useLoadScript,
} from '@react-google-maps/api';
import React from 'react';

import { env } from '../../../environments/env';

export interface LatLng {
  lat: number;
  lng: number;
}

interface MapProps {
  locations: LatLng[];
}

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 100px)',
};

const createKey = (location: LatLng) => {
  return location.lat + location.lng;
};

export const Map = ({ locations }: MapProps) => {
  const [map, setMap] = React.useState<google.maps.Map<Element> | null>(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: env.googleMapApiKey,
  });

  const handleMapLoad = (map: google.maps.Map<Element>) => {
    setBounds(map);
    setMap(map);
  };

  const handleMapUnmount = () => {
    setMap(null);
  };

  React.useEffect(() => {
    if (map && locations.length) {
      setBounds(map);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locations]);

  const setBounds = (map: google.maps.Map<Element>) => {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach((loc) => {
      bounds.extend(loc);
    });

    map.fitBounds(bounds);
  };

  const renderMap = (latLngs: LatLng[]) => {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={handleMapLoad}
        onUnmount={handleMapUnmount}
        clickableIcons={false}
      >
        <MarkerClusterer averageCenter={true}>
          {(clusterer) =>
            latLngs.map((location) => (
              <Marker
                key={createKey(location)}
                position={location}
                clusterer={clusterer}
              />
            ))
          }
        </MarkerClusterer>
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap(locations) : <div>Loading</div>;
};
