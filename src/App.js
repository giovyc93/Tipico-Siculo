import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import DiscoverPage from "./pages/DiscoverPage";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/find-us" component={MapPage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/discover" component={DiscoverPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};
export default App;
