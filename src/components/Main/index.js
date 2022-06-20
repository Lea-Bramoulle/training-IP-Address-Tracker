import './main.scss';

import PropTypes from 'prop-types';

function Main({ ipAddressInformations }) {
  return (
    <div className="main-container">
      <div className="main-container--informations">
        <h2 className="main-container--title">Ip address</h2>
        <p className="main-container--value">{ipAddressInformations.ip}</p>
      </div>
      <div className="main-container--informations">
        <h2 className="main-container--title">Location</h2>
        <p className="main-container--value">{ipAddressInformations.location.region}, {ipAddressInformations.location.country}</p>
      </div>
      <div className="main-container--informations">
        <h2 className="main-container--title">Timezone</h2>
        <p className="main-container--value">{ipAddressInformations.location.timezone}</p>
      </div>
      <div className="main-container--informations">
        <h2 className="main-container--title">Isp</h2>
        <p className="main-container--value">{ipAddressInformations.isp}</p>
      </div>
    </div>
  );
}

Main.propTypes = {
  ipAddressInformations: PropTypes.object.isRequired,
};

export default Main;
