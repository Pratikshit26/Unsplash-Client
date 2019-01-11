import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.PNG';

const NavBar = () => (
  <nav className="NavBar-Wrapper">
    <div className="Logo-Wrapper">
     <img src={ logo } alt="" className="logo" />
    </div>
    <div className="Author-Wrapper">
     <a href="https://github.com/Pratikshit26" target="_blank" rel="noopener noreferrer">
      <p className="author">Pratikshit</p>
    </a>
    </div>
  </nav>
); 

export default NavBar;
