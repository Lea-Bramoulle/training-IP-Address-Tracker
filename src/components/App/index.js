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

  const loadApiAddress = async function () {
    $.getJSON('https://jsonip.com?callback=?', (data) => {
      setIpAddress(data.ip);
    });
  };

  const loadApiData = async function () {
    try {
      setInputValue('');
      console.log(ipAddress);
      const ipAddressData = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_GEO_IPIFY_API_KEY}&ipAddress=${ipAddress}`);

      console.log(ipAddressData.data);

      setIpAddressInformations(ipAddressData.data);
      geoCoder();
    }
    catch (error) {
      console.error(error);
    }
  };

  const geoCoder = async function () {
    const ipData = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_GEO_IPIFY_API_KEY}&ipAddress=${ipAddress}`);

    try {
      const provider = new OpenStreetMapProvider();

      const results = await provider.search({ query: `${ipData.data.location.region}, ${ipData.data.location.country}` });

      console.log([results[0].y, results[0].x]);
      const newTab = [];
      newTab.push(results[0].y, results[0].x);
      setGeoCode(newTab);
      console.log(geoCode);
    }
    catch (error) {
      console.error(error);
    }
  };

  const handleFormInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      setIpAddress(inputValue);
      setInputValue('');
      const ipAddressData = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_GEO_IPIFY_API_KEY}&ipAddress=${ipAddress}`);
      console.log(ipAddressData.data);

      setIpAddressInformations(ipAddressData.data);
      console.log(ipAddressInformations);
      geoCoder();
    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadApiAddress();
  }, []);

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
