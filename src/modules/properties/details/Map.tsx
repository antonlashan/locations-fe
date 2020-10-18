import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useLoadScript,
} from '@react-google-maps/api';
import React from 'react';

import { env } from '../../../environments/env';
import { PropertyData } from '../interface';

interface MapProps {
  locations: PropertyData[];
  onMarkerClick: (loc: PropertyData) => void;
}

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: 'calc(100vh - 100px)',
  maxHeight: '600px',
};

export const GMap = ({ locations, onMarkerClick }: MapProps) => {
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
      bounds.extend({ lat: loc.lat, lng: loc.lon });
    });

    map.fitBounds(bounds);
  };

  const handleMarkerClick = (loc: PropertyData) => () => {
    onMarkerClick(loc);
  };

  const renderMap = (latLngs: PropertyData[]) => {
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={handleMapLoad}
        onUnmount={handleMapUnmount}
        clickableIcons={true}
      >
        <MarkerClusterer averageCenter={true}>
          {(clusterer) =>
            latLngs.map((location) => (
              <Marker
                key={location.id}
                position={{ lat: location.lat, lng: location.lon }}
                clusterer={clusterer}
                onClick={handleMarkerClick(location)}
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
