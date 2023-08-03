import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  
  return (
    <div className="navBar">
      <img className='logoImg' src={Logo} alt="" />
      <div>
        <input className="input" />
        <button className='search' onClick="">Cerca</button>
      </div>
    </div>
  );
}

export default Navbar;