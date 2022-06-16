import arrowButtonSvg from '../../assets/images/icon-arrow.svg';

import './header.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header--title">IP AddressTracker</h1>
      <form className="form">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="form--input"
        />
        <button type="submit" className="form--button">
          <img src={arrowButtonSvg} alt="submit button icon" />
        </button>
      </form>
    </header>
  );
}

export default Header;
