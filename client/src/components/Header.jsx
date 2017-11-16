import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){
  return(
    <div>
      <Link to="/" />
      <Link to="/login" />
      <Link to="/register" />
      <Link to="/dashboard" />
      <Link to="/movies" />
    </div>
  )
}

export default Header;
