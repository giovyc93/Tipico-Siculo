import Phone from "../assets/img/Phone.png"
import Mail from "../assets/img/Mail.png"
import City from "../assets/img/City.png"
import Address from "../assets/img/Address.png"

const MapDetails = ({ tel, address, city, mail }) => {
    return (
        <div className="mapDetails">
            <div className="detailsItem">
                <img src={Phone} alt="phone" />
                <h2 className="nameCard">telefono</h2>
                <a className="nameCard1" href={tel}>{tel}</a>
            </div>
            <div className="detailsItem">
                <img src={Mail} alt="email" />
                <h2 className="nameCard">Email</h2>
                <a className="nameCard1" href="/aboutUs">{mail}</a>
            </div>
            <div className="detailsItem">
                <img src={City} alt="city" />
                <h2 className="nameCard">città</h2>
                <a className="nameCard1" href="/aboutUs">{city}</a>
            </div>
            <div className="detailsItem">
                <img src={Address} alt="address" />
                <h2 className="nameCard">Via</h2>
                <a className="nameCard1" href="/aboutUs">{address}</a>

            </div>
        </div>
    )
}
export default MapDetails