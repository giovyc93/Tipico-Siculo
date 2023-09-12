import React, { useEffect, useState } from "react";
import logo from "../assets/img/Logo-robotics-CMYK-Bianco.png";

const NavbarGlobal = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  });

  return (
    <>
      <div className="header">
        <div className="nav1">
          <div className="listaNav1,animate">
            <ul>
              <li className="listItemNav">
                <a className="aNavGlobal" href="/company">
                  <img className="logoImg1" src={logo} alt="immagine"></img>
                </a>
              </li>
              <li className="listItemNav">
                <a className="aNavGlobal" href="/company">
                  <img className="logoImg1" src={logo} alt="immagine"></img>
                </a>
              </li>
              <li className="listItemNav">
                <a className="aNavGlobal" href="/company">
                  <img className="logoImg1" src={logo} alt="immagine"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarGlobal;
