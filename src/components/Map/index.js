import './map.scss';


import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

async function Geocoder() {
  const provider = new OpenStreetMapProvider();

  const results = await provider.search({ query: 'Auvergne-Rhône-Alpes, FR' });
  
  console.log([results[0].x, results[0].y]);

}

Geocoder()

function Map({displayMap}) {
  return (
    <div >
      <MapContainer className="map-container" center={[54.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Map;
