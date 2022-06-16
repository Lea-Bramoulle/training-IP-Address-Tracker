// == Import
import './styles.scss';

import { useState } from 'react';

import Map from '../Map';
import Header from '../Header';
import Main from '../Main';

// == Composant
function App() {
  const [inputValue, setInputValue] = useState([]);
  const [IpAddress, setIpAddress] = useState('ze');

  const handleFormInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIpAddress(inputValue);
    setInputValue('');
  };

  return (
    <div className="app">
      <Header 
        onFormSubmit={handleFormSubmit}
        onInputValueChange={handleFormInputChange}
        ipAddress={IpAddress}
      />
      <div>
        <div className="z-index2">
          <Main />
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
