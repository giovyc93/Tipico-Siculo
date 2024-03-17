import Phone from "../assets/img/Phone.png"
import Mail from "../assets/img/Mail.png"
import City from "../assets/img/City.png"
import Address from "../assets/img/Address.png"

const MapDetails = ({ tel, address, city }) => {
    return (
        <div className="mapDetails">
            <div className="detailsItem">
                <img src={Phone} alt="phone" />
                <h2 className="nameCard">tel</h2>
                <p>{tel}</p>
            </div>
            <div className="detailsItem">
                <img src={Mail} alt="email" />
                <h2 className="nameCard">Email</h2>
                <p>{address}</p>
            </div>
            <div className="detailsItem">
                <img src={City} alt="city" />
                <h2 className="nameCard">città</h2>
                <p>{city}</p>
            </div>
            <div className="detailsItem">
                <img src={Address} alt="address" />
                <h2 className="nameCard">Via</h2>
                <p>{address}</p>
            </div>
        </div>
    )
}
export default MapDetails