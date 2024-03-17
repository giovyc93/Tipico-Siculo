import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DiscoverContent from "../components/DiscoverContent";
import Title from "../components/Title"
import Cover from "../assets/img/Cover.webp";
import Crocche from "../assets/img/Crocchè.webp";




const CompanyPage = () => {
  const data = {
    classe: "discoverContent",
    paragraph: "Si occupa di produzione, trasformazione e commercializzazione di tutti quei prodotti tipici della tradizione e non solo .leader nel settore della ristorazione. Puntiamo ad alleggerire quelli che sono i carichi delle cucine nell'ambito del food and beverage, riducendo costi e tempi di gestione .",
    title: "Specialità Tipiche Siciliane",
    img: Cover
  };
  const data1 = {
    classe: "discoverContent1",
    paragraph: " Diamo una mano a chi si trova nel settore della ristorazione, con i nostri prodotti di alta qualità ma dal costo contenuto.usiamo solo materie prima di qualità per dare ai nostri clienti tutta la freschezza di un piatto come appena cucinato. Ci avvaliamo dei migliori chef della nostra cucina così da poter garantire un servizio efficace , veloce e senza pensieri.",
    title: "Gusti Autentici per Aziende Esigenti",
    img: Crocche
  };


  return (
    <>
      <Navbar />
      <div className="pageContent" id="#products">
        <div className="contentBox">
          <DiscoverContent {...data} />
          <div className="spaceContainer1"></div>
          <div className="titleContainer">
            <Title />
          </div>
          <DiscoverContent {...data1} />
        </div>
      </div>
      <div className="spaceContainer"></div>
      <div className="footerContainer">
        <Footer />
      </div>

    </>
  );
};
export default CompanyPage;
