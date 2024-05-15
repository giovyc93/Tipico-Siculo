import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MapDetails from "../components/MapDetails";
import Title from "../components/Title"

const MapPage = () => {
    return (
        <>
            <div className="pageAboutUs">
                <Navbar />
                <div className="teamTitle">
                    <h2 className="contentSubtitle">Contattaci</h2>
                </div>
                <div className="cardMapsContainer">
                    <MapDetails mail="info@tipicosiculo.it" address="via Madonna di Lourdes" tel="091 6733732" city="Palermo, PA" region="Sicilia" />
                    <div className="imgMap">
                        <iframe load="lazy" title="Mappa azienda" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJi-BRpO3uGRMRmYdmGqjteFs&key=AIzaSyDI5orfqNB-5gDSj8vfupH_t0b-BWZctaQ"></iframe>
                    </div>
                </div>
                <div className="spaceContainer2"></div>
                <Title />
                <div className="spaceContainer"></div>
                <Footer />
            </div>
        </>
    );
};
export default MapPage;
