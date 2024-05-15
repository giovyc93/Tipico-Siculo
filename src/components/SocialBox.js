import facebook from "../assets/img/facebook.svg";


const SocialBox = () => {
    return (
        <ul className="socialBox">
            <li className="boxLiIcon">
                <a className="aNavFoot" href="https://www.facebook.com/tipicosiculo/?locale=it_IT">
                    <img className="imagebox" src={facebook} alt="facebook"></img>
                </a>
            </li>
            <li className="boxLiIcon">
                <a className="aNavFoot" href="https://www.instagram.com/tipicosiculo?igsh=NThwMjBvZWVyZDIx">
                    <img className="imagebox" src={facebook} alt="instagram"></img>
                </a>
            </li>
        </ul>
    )
}
export default SocialBox