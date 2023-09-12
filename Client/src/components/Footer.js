import React from "react";
import linkedin from "../assets/img/linkedin.svg";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import twitter from "../assets/img/twitter.svg";

const Footer = () => {
  return (

    <>
    <div className="footer">
      <ul className="socialLinks">
        <li className="footerLi">
          <a className="linksFooter" href="/">
            {" "}
            Home
          </a>
        </li>
        <li className="footerLi">
          <a className="linksFooter" href="/company">
            {" "}
            Company
          </a>
        </li>
        <li className="footerLi">
          <a className="linksFooter" href="/services">
            {" "}
            Technologies
          </a>
        </li>
        <li className="footerLi">
          <a className="linksFooter" href="/about-us">
            {" "}
            Team
          </a>
        </li>
        <li className="footerLi">
          <a className="linksFooter" href="/contact-us">
            {" "}
            Contact Us
          </a>
        </li>
        <li className="footerLi">
          <a className="linksFooter" href="/departments">
            {" "}
            Departments
          </a>
        </li>
      </ul>
      <ul className="socialIcon">
        <li className="footerLiIcon">
          <a className="aNavFoot" href="/">
            <img className="imageFooter" src={linkedin} alt="linkedin" ></img>
          </a>
        </li>
        <li className="footerLiIcon">
          <a className="aNavFoot" href="/">
            <img className="imageFooter" src={facebook} alt="facebook"></img>
          </a>
        </li>
        <li className="footerLiIcon">
          <a className="aNavFoot" href="/">
            <img className="imageFooter" src={instagram} alt="instagram"></img>
          </a>
        </li>
        <li className="footerLiIcon">
          <a className="aNavFoot" href="/">
            <img className="imageFooter" src={twitter} alt="twitter"></img>
          </a>
        </li>
      </ul>
      <div className="paragraph">
    <p>© 2023 - 2023 Prismed - All Rights Reserved.</p>
    </div>
    </div>
    
    </>
    
  );
};
export default Footer;
