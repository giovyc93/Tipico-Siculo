import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedContent from "../components/AnimatedContentCompany";

const CompanyPage = () => {
  return (
    <>
      <div className="pageContent" id="#products">
        <Navbar />

       
          <AnimatedContent />
  
        <div className="spaceContainer2"></div>
        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default CompanyPage;
