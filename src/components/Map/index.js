import './map.scss';


import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function Map({displayMap}) {
  return (
    <div >
      <MapContainer className="map-container" center={[54.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Map;
