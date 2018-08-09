import React, { Component } from 'react';
import logo from './logo.svg';

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar page__toolbar">
        <a href="https://aviasales.ru" target="_blank" className="toolbar__logo toolbar__logo--aviasales logo logo--aviasales">
          <img src={logo} alt="logo" />
        </a>
      </div>
    );
  }
}

export default Toolbar;
