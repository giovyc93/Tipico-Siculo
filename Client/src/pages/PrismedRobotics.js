import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedContentDepartments from "../components/AnimatedRobotics";
import CardProduct from "../components/CardProduct";
import reactLogo from "../assets/img/download.png";
import AiLogo from "../assets/img/Ai-logo.jpg";
import ARLogo from "../assets/img/AR.webp";
import copernico from "../assets/img/CopernicoNero.png";


const CompanyPage = () => {
  return (
    <>
      <div className="pageRobotics" id="#products">
        <Navbar />
        <AnimatedContentDepartments />
        <div className="cardProductsContainerRobotics">
          <CardProduct
            titleCard="Copernico"
            fotoCard={copernico}
            description="Lorem ipsum dolor sit amet, s Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <CardProduct
            titleCard="Artificial intelligence"
            fotoCard={AiLogo}
            description="Lorem ipsum dolor sit amet,  ore eu fugiat nulla pariatur."
          />
          <CardProduct
            titleCard="Augmented Reality"
            fotoCard={ARLogo}
            description="Lorem ipsum dolor sit amet,   dolore eu fugiat nulla pariatur."
          />
          <CardProduct
            titleCard="Giovanni Mucciaccia"
            fotoCard={reactLogo}
            description="Lorem ipsum dolor sit amet, illum dolore eu fugiat nulla pariatur."
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
