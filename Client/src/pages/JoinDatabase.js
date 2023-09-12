import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import arte from "../assets/img/arte.jpg";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageContactUs" style={{ backgroundImage: `url(${arte})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <h2 className="contactUsTitle">Aggiungi una chiesa </h2>
        <Form />
        <div className="spaceContainer2"></div>
        <div className="footerContainer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
