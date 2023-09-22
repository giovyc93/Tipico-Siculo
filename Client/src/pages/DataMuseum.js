import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormMuseum from "../components/FormMuseum";
import arte from "../assets/img/arte.jpg";
import DataContainerMuseum from "../components/DataContainerMuseum";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      {/* style={{ backgroundImage: `url(${arte})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} */}
      <div className="pageContactUs" >
        <h2 className="contactUsTitle">Aggiungi una museo </h2>
        <FormMuseum />
        <DataContainerMuseum />
        <div className="spaceContainer2">
        </div>
        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
