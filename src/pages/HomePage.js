import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import ProductContainer from "../components/ProductContainer";
import Crocche from "../assets/img/Crocchè.webp";
import Title from "../components/Title"



const HomePage = () => {

  return (
    <>
      <Navbar />
      <div className="homePage">
        <div className="carousel-container">
          <div className="carousel">
            <img
              src={Crocche}
              alt={`Crocchè`}
              className="carousel__img" />
            <div class="centered">
              <a href="/discover" className="aTitle"><h1 className="titleHome">Tipico Siculo</h1></a>
            </div>
          </div>
        </div>
        <div className="spaceContainer"></div>
        <Content
          contentTitle="Storica azienda"
          contentParagraph="Dalla parte di chi cucina"
        />
        <div className="spaceContainer1"></div>
        <div className="homeProducts">
          <h2 className="contentSubtitle">I nostri prodotti</h2>
          <ProductContainer />
        </div>
        <div className="spaceContainer"></div>
        <div className="spaceContainer2"></div>
        <Title />
      </div>
      <Footer />

    </>
  );
};


export default HomePage;
