import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedContent from "../components/AnimatedContentCompany";
import Sidebar from "../components/Sidebar";

const CompanyPage = () => {
  return (
    <>
      <div className="pageContent" id="#products">
        <Navbar />
        <div className="contentBoxSide">
          <Sidebar />
          <div className="animatedContainer">
            <AnimatedContent />
          </div>
        </div>
        <div className="spaceContainer2"></div>
        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default CompanyPage;
