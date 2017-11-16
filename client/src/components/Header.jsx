import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){
  return(
    <div className="header">
      <ul>
        <li><Link to="/" /></li>
        <li><Link to="/login" /></li>
        <li><Link to="/register" /></li>
        <li><Link to="/dashboard" /></li>
        <li><Link to="/movies" /></li>
        <li><span className="logout" onClick={props.logout}>Logout</span></li>
      </ul>
    </div>
  )
}

export default Header;
