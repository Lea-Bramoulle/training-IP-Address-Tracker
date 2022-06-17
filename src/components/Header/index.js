import PropTypes from 'prop-types';
import arrowButtonSvg from '../../assets/images/icon-arrow.svg';

import './header.scss';

function Header({ ipAddress, onFormSubmit, onInputValueChange }) {
  return (
    <header className="header">
      <h1 className="header--title">IP AddressTracker {ipAddress}</h1>
      <form className="form" method="POST" onSubmit={onFormSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search for any IP address or domain"
          className="form--input"
          onChange={onInputValueChange}
        />
        <button type="submit" className="form--button">
          <img src={arrowButtonSvg} alt="submit button icon" />
        </button>
      </form>
    </header>
  );
}

Header.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onInputValueChange: PropTypes.func.isRequired,
  ipAddress: PropTypes.string.isRequired,
};

export default Header;
