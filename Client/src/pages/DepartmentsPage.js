import Card from "../components/CardDepartments";
import Navbar from "../components/Navbar";
import foto1 from "../assets/img/prismed-rob.jpg";
import foto3 from "../assets/img/Disposable.jpg";
import Footer from "../components/Footer";

const DepartmentsPage = () => {
  return (
    <div className="pageDepartment">
      <Navbar />
      <h2 className="blackTitle">I nostri dipartimenti</h2>
      <div className="departmentContainer">
        <Card
          fotoCard={foto1}
          href="/robotics"
          description="Lorem ipsum dolor sit amet, Ut enim ad minim venia, nisi utpariatur."
        />

        <Card
          fotoCard={foto3}
          href="/disposable"
          description="Lorem ipsum dolor sit amet, Ut enim ad minim venia,  nulla pariatur."
        />
      </div>
      <div className="spaceContainer2"></div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default DepartmentsPage;
