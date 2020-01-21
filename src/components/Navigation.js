import React from 'react';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <img src={logo} alt="logo"></img>
      <NavLink to="/">            
        <img src={logo} alt="logo"></img>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/" activeClassName="selected">   
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName="selected">
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;