import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundPage from "../components/HomePageLayout";

const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="homePage">
        <BackgroundPage />
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
