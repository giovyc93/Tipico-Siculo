import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";

const SocialBox = () => {
    return (
        <ul className="socialBox">
            <li className="boxLiIcon">
                <a className="aNavFoot" href="/">
                    <img className="imagebox" src={facebook} alt="facebook"></img>
                </a>
            </li>
            <li className="boxLiIcon">
                <a className="aNavFoot" href="/">
                    <img className="imagebox" src={instagram} alt="instagram"></img>
                </a>
            </li>
        </ul>
    )
}
export default SocialBox