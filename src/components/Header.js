import React from 'react';
import logoImage from '../images/logo-sistema-solar.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ logoImage } alt="Logomarca" />
      </header>
    );
  }
}

export default Header;
