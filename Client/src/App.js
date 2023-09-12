import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import CompanyPage from "./pages/CompanyPage";
import JoinDatabase from "./pages/JoinDatabase";
import DepartmentsPage from "./pages/DepartmentsPage";
import RoboticPage from "./pages/PrismedRobotics";
import DisposablePage from "./pages/PrismedDisposable";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/");
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Switch>
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/company" component={CompanyPage} />
        <Route path="/services" component={TechnologiesPage} />
        <Route path="/contact-us" component={JoinDatabase} />
        <Route path="/departments" component={DepartmentsPage} />
        <Route path="/robotics" component={RoboticPage} />
        <Route path="/disposable" component={DisposablePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
