import CardProduct from "../components/CardProduct";
import reactLogo from "../assets/img/download.png";
import AiLogo from "../assets/img/Ai-logo.jpg";
import ARLogo from "../assets/img/AR.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DigitalTwin from "../assets/img/digital-twin.png";
import Vr from "../assets/img/Vr.webp";


const ProductsPage = () => {
  return (
    <div className="pageProducts" id="#products">
      <Navbar />
      <h2 className="blackTitle">Le nostre tecnologie</h2>
      <div className="productsSection">
        <div className="cardProductsContainer">
          <CardProduct
            titleCard="Digital Twin "
            fotoCard={DigitalTwin}
            description="Lorem ipsum dolor sit amet,  Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <CardProduct
            titleCard="Artificial intelligence"
            fotoCard={AiLogo}
            description="Lorem ipsum dolor sit ae commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <CardProduct
            titleCard="Augmented Reality"
            fotoCard={ARLogo}
            description="Lorem ipsum dolor sit ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <CardProduct
            titleCard="Virtual Reality"
            fotoCard={Vr}
            description="Lorem ipsum dolor sit amet,  ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <CardProduct
            titleCard="Giovanni Mucciaccia"
            fotoCard={reactLogo}
            description="Lorem ipsum dolor sit amet,  ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </div>
      </div>
      <div className="spaceContainerMed"></div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default ProductsPage;
