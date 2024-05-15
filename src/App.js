import React from "react";
import { Route, Switch } from "react-router-dom";
import DiscoverPage from "./pages/DiscoverPage";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/AboutUs" component={MapPage} />
        <Route path="/Discover" component={DiscoverPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};
export default App;
