import linkedin from "../assets/img/linkedin.svg";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import twitter from "../assets/img/twitter.svg";

const Card1 = ({ fotoCard, nameCard, description, position }) => {
  return (
    <>
      <div className="teams">
        <img className="teamsImage" src={fotoCard} alt=""></img>
        <div className="nameCard">{nameCard}</div>
        <div className="designCard">{position}</div>
        <div className="aboutCard">{description}</div>
        <div className="linksCard">
          <a className="aNavFoot" href="/">
            <img className="linksImage" height="30px" src={linkedin} alt="linkedin"></img>
          </a>
          <a className="aNavFoot" href="/">
            <img className="linksImage" height="30px" src={facebook} alt="facebook"></img>
          </a>
          <a className="aNavFoot" href="/">
            <img className="linksImage" height="30px" src={instagram} alt="instagram" ></img>
          </a>
          <a className="aNavFoot" href="/">
            <img className="linksImage" height="30px" src={twitter} alt="twitter"></img>
          </a>
        </div>
      </div>
    </>
  );
};
export default Card1;
