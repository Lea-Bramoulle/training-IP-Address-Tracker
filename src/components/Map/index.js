import './map.scss';

import PropTypes from 'prop-types';
import { MapContainer, TileLayer } from 'react-leaflet';

function Map({ geoCodeInformations }) {
  return (
    <div>
      <MapContainer className="map-container" center={geoCodeInformations} zoom={8} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

Map.propTypes = {
  geoCodeInformations: PropTypes.array.isRequired,
};

export default Map;
