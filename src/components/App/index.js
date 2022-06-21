/* eslint-disable no-shadow */
/* eslint-disable no-console */
// == Import
import './styles.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';

import { OpenStreetMapProvider } from 'leaflet-geosearch';
import Map from '../Map';
import Header from '../Header';
import Main from '../Main';

// == Composant
function App() {
  const [inputValue, setInputValue] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [ipAddressInformations, setIpAddressInformations] = useState({});
  const [geoCode, setGeoCode] = useState([]);

  const geoCoder = async function (data) {
    try {
      const provider = new OpenStreetMapProvider();
      const results = await provider.search({ query: `${data.location.region}, ${data.location.country}` });

      console.log([results[0].y, results[0].x]);
      setGeoCode([results[0].y, results[0].x]);
    }
    catch (error) {
      console.error(error);
    }
  };

  // const loadApiAddress = async function () {
  //   $.getJSON('https://jsonip.com?callback=?', (data) => {
  //     setIpAddress(data.ip);
  //   });
  // };

  const fetchIpDataFromApi = async (ipAddress) => {
    try {
      const ipAddressData = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_GEO_IPIFY_API_KEY}&ipAddress=${ipAddress}`);

      setIpAddressInformations(ipAddressData.data);
      console.log(ipAddressInformations);
      setGeoCode([]);

      geoCoder(ipAddressData.data);
    }
    catch (error) {
      console.error(error);
    }
  };

  const loadApiData = async function () {
    setInputValue('');
    fetchIpDataFromApi(ipAddress);
  };

  const handleFormInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setIpAddress(inputValue);

    fetchIpDataFromApi(inputValue);
  };

  useEffect(() => {
    loadApiData();
  }, []);

  return (
    <div className="app">
      <Header
        onFormSubmit={handleFormSubmit}
        onInputValueChange={handleFormInputChange}
        ipAddress={ipAddress}
      />
      <div>
        <div className="z-index2">
          {ipAddressInformations && ipAddressInformations.location
        && <Main ipAddressInformations={ipAddressInformations} />}
        </div>
        <div className="z-index1">
          {geoCode[0] && <Map geoCodeInformations={geoCode} />}
        </div>
      </div>
    </div>
  );
}

// == Export
export default App;
