import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import ProductContainer from "../components/ProductContainer";
import Home from "../assets/img/Home.jpg";
import Title from "../components/Title"
import Cover from "../assets/img/mechanic.jpg";
import Tyres from "../assets/img/tyres.jpg";
import DiscoverContent from "../components/DiscoverContent";



const HomePage = () => {
  const data = {
    classe: "discoverContent",
    paragraph: "Se hai bisogno di noleggiare un'auto mentre il tuo veicolo è in revisione, Centro Revisione Ienna ti metterà in contatto con diverse compagnie di noleggio a breve e lungo termine con cui collaborano, garantendoti le tariffe più vantaggiose sul mercato. Inoltre, per soddisfare le esigenze delle grandi aziende, l'officina di Palermo offre soluzioni personalizzate per le revisioni periodiche dei veicoli aziendali, tra cui la gestione assicurativa senza pagamento anticipato.",
    title: "Specialità Tipiche Siciliane",
    img: Cover
  };
  const data1 = {
    classe: "discoverContent1",
    paragraph: " Diamo una mano a chi si trova nel settore della ristorazione, con i nostri prodotti di alta qualità ma dal costo contenuto. Usiamo solo materie prima di qualità per dare ai nostri clienti tutta la freschezza di un piatto come appena cucinato. Ci avvaliamo dei migliori chef della nostra cucina così da poter garantire un servizio efficace, veloce e senza pensieri.",
    title: "Gusti Autentici per Aziende Esigenti",
    img: Tyres
  };
  return (
    <>
      <Navbar />
      <div className="homePage">
        <div className="carousel-container">
          <div className="carousel">
            <img
              src={Home}
              alt={`Home`}
              className="carousel__img" />
            <div class="centered">
              <a href="/discover" className="aTitle"><h1 className="titleHome">Centro revisione</h1><p>Ienna Rosalia</p></a>
            </div>
          </div>
        </div>
        <Content
          contentTitle="Storica azienda"
          contentParagraph="Centro Revisione Auto Ienna è una delle principali officine di Palermo, specializzata nelle riparazioni meccaniche di veicoli di ogni tipo, sia civili che commerciali. Grazie a un team di meccanici esperti e all'uso di avanzate tecniche di diagnostica computerizzata, l'officina è in grado di ripristinare completamente la funzionalità dei veicoli, correggendo malfunzionamenti e migliorando le prestazioni complessive. Come Centro Autorizzato dalla Motorizzazione Civile, offre anche servizi di revisione periodica per automobili, motociclette e autocarri, fornendo la documentazione necessaria per la conformità del veicolo. Sia che si tratti di auto, furgoni, camion o moto, i tecnici qualificati di Florio e Calandra Revisione Auto miglioreranno le prestazioni del tuo veicolo."
        />
        <DiscoverContent {...data} />
        <DiscoverContent {...data1} />
        <Title />
      </div>
      <Footer />

    </>
  );
};


export default HomePage;
