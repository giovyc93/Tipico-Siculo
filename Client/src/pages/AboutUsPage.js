import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamsContainer from "../components/TeamsContainer";

const AboutUsPage = () => {
  return (
    <>
      <div className="pageAboutUs">
        <Navbar />
        <div className="cardTeamContainer">
          <div className="teamTitle">
            <h2 className="contentSubtitle">Team</h2>
          </div>
          <TeamsContainer />
          <div className="spaceContainerMed"></div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default AboutUsPage;
