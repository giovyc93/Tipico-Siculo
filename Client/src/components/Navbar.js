import React from "react";
import Logo from "../assets/img/Logo.png";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className="navigation">
        <input type="checkbox" className="toggleMenu" />
        <div className="hamburger"></div>
        <ul className="menu">
          <li>
            <a className="aNav" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="aNav" href="/discover">
              Scopri
            </a>
          </li>
          <li>
            <a className="aNav" href="/churches">
              Chiese
            </a>
          </li>
          <li>
            <a className="aNav" href="/about-us">
              Team
            </a>
          </li>
          <li>
            <a className="aNav" href="/database">
              Database
            </a>
          </li>
          <li>
            <a className="aNav" href="/musei">
              Musei
            </a>
          </li>
          {/* <li>
            <a className="aNav" href="/departments">
              Departments
            </a>
          </li> */}
        </ul>
      </div> 
      {/* <div className="login">
        <label className="labelNav"> Utente <input className="inputNav" /> </label>
        <label className="labelNav">  Password <input className="inputNav" /> </label>
         <div className="form__button">
          <a className="aHome" href="/contact-us">
            <input type="submit" className="button__content2" value="ACCEDI" />
          </a>
        </div>
      </div> */}
      
        
    </header>

    //   <div className="navBar">
    //     <div className="titleContainer">
    //     {/* <img className="logoImg" src={prismed} alt="" /> */}
    //       <a className="aNav" href="/">
    //         {/* <h1 className="navTitle">
    //         <span className="navPris">Pris</span>med
    //       </h1> */} <img className="logoText" src={prismedB} alt="" />
    //       </a>
    //     </div>

    //     <input type = "checkbox" className="toggleMenu"/>
    //     <div className="hamburger"></div>

    //       <ul className="listaNav">
    //         <li>
    //         <a className="aNav" href="/">Home</a>
    //         </li>
    //         <li>
    //         <a className="aNav" href="/company">Company</a>
    //         </li>
    //         <li>
    //         <a className="aNav" href="/services">Technologies</a>
    //         </li>
    //         <li>
    //         <a className="aNav" href="/about-us">Team</a>
    //         </li>
    //         <li>
    //         <a className="aNav" href="/contact-us">Contact Us</a>
    //         </li>
    //         <li>
    //         <a className="aNav" href="/departments">Departments</a>
    //         </li>
    //       </ul>
    //     </div>

   
  );
};

export default Navbar;
