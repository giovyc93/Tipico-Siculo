import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedContentDepartments from "../components/AnimatedDisposable";
import CardProduct from "../components/CardProduct";
import reactLogo from "../assets/img/download.png";
import AiLogo from "../assets/img/Ai-logo.jpg";
import ARLogo from "../assets/img/AR.webp";

const CompanyPage = () => {
  return (
    <>
      <div className="pageDisposable" id="#products">
        <Navbar />
        <AnimatedContentDepartments />
        <div className="cardProductsContainerRobotics">
          <CardProduct
            titleCard="React "
            fotoCard={reactLogo}
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit,  ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <CardProduct
            titleCard="Artificial intelligence"
            fotoCard={AiLogo}
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <CardProduct
            titleCard="Augmented Reality"
            fotoCard={ARLogo}
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <CardProduct
            titleCard="Giovanni Mucciaccia"
            fotoCard={reactLogo}
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </div>
        <div className="spaceContainerMed"></div>
        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default CompanyPage;
