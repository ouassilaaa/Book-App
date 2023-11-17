import React from 'react';
import '../App.css'; 
import Image from '../images/logo.png';

const Header = () => {
  return (
    <div className="header">
     <img src={Image} alt="Logo Image"  />
    </div>
  );
};

export default Header;
