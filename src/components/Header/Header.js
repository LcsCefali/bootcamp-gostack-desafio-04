import React, { Component } from 'react';
import { FiUser } from "react-icons/fi"; //FiUser /FiUsers
import Logo from '../../assets/logo.png';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        {/* <div>Friends Advice</div> */}
        <img src={Logo} className="logo" />
        <div className="profile">
          Meu Perfil 
          <div >
            <FiUser className="profileIcon"/>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
