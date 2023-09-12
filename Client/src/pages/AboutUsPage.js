import Card1 from "../components/Card1";
import foto1 from "../assets/img/ceo.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  return (
    <>
      <div className="pageAboutUs">
        <Navbar />
        <h2 className="blackTitle">Chi siamo</h2>
        <div className="cardTeamContainer">
          <Card1
            nameCard="James Jhones "
            fotoCard={foto1}
            position="Ceo"
            description="Lorem ipsum dolor sit amet, Ut enim ad minim venia, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <Card1
            nameCard="Micheal Jack "
            fotoCard={foto1}
            position="Software developer"
            description="Lorem ipsum dolor sit amet, Ut enim ad minim venia, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <Card1
            nameCard="Luca Toni "
            fotoCard={foto1}
            position="Ceo"
            description="Lorem ipsum dolor sit amet, Ut enim ad minim venia, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <Card1
            nameCard="React "
            fotoCard={foto1}
            position="Ceo"
            description="Lorem ipsum dolor sit amet, Ut enim ad minim venia, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </div>
        <div className="spaceContainerMed"></div>
        <div className="footerContainer">
          <Footer />
        </div>
      </div>
      <div></div>
    </>
  );
};
export default AboutUsPage;
