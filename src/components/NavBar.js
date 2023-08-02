import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/PageA');
  }
  return (
    <div className="navBar">
      <img className='logoImg' src={Logo} alt="" />
      <div>
        <input className="input" />
        <button className='search' onClick={handleClick}>Cerca</button>
      </div>
    </div>
  );
}

export default Navbar;