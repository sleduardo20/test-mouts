import React from 'react';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import imgMarker from '../../assets/marker.png';

const markerIcon = Leaflet.icon({
  iconUrl: imgMarker,
  iconSize: [34, 43],
});

// export interface MapProps {}

const Map = () => {
  return (
    <MapContainer
      center={[-55, -10]}
      zoom={3}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[-26.882505, -49.075194]} icon={markerIcon}>
        <Tooltip>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Map;
