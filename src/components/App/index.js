// == Import
import './styles.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';

import Map from '../Map';
import Header from '../Header';
import Main from '../Main';
import ipData from '../../data/ip';

import React from "react";
import env from "react-dotenv";

// == Composant
function App() {
  const [inputValue, setInputValue] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [ipAddressInformations, setIpAddressInformations] = useState({});

  const API_KEY = 'at_elIDSJdq4s275C7axx6in67YrPJSn';

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
      console.log(ipAddressInformations);
    }
    catch (error) {
      console.error(error);
    }
  };

  const handleFormInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target);


    try {
      setIpAddress(inputValue);
      setInputValue('');
      console.log(ipAddress);
      const ipAddressData = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=${ipAddress}`);
      console.log(ipAddressData.data);

      setIpAddressInformations(ipAddressData.data);
      console.log(ipAddressInformations);
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
          <Main ipAddressInformations={ipAddressInformations} />
        </div>
        <div className="z-index1">
          <Map />
        </div>
      </div>
    </div>
  );
}

// == Export
export default App;


