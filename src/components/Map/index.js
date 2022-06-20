import './map.scss';

import { MapContainer, TileLayer } from 'react-leaflet';

function Map({ geoCodeInformations }) {
  return (
    <div>
      <MapContainer className="map-container" center={[geoCodeInformations[0], geoCodeInformations[1]]} zoom={8} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Map;

// const Geocoder = async () => {
//   const provider = new OpenStreetMapProvider();

//   const results = await provider.search({ query: 'Auvergne-Rhône-Alpes, FR' });

//   console.log([results[0].x, results[0].y]);
// };

// Geocoder();
