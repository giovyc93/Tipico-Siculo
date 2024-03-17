import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul className="socialLinks">
          <li className="footerLi">
            <a className="linksFooter" href="/">
              Home
            </a>
          </li>
          <li className="footerLi">
            <a className="linksFooter" href="/discover">
              Chi siamo
            </a>
          </li>
          <li className="footerLi">
            <a className="linksFooter" href="/about-us">
              Team
            </a>
          </li>
          <li className="footerLi">
            <a className="linksFooter" href="/find-us">
              Contattaci
            </a>
          </li>
        </ul>
        <div className="paragraph">
          <p>© 2024 - 2024 Tipico Siculo - All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
