import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MainSection from "./core/features/MainSection/MainSection";
import "./assets/scss/reset.scss";

const App = () => {
  const customHistory = createBrowserHistory();

  return (
    <Router>
      <Switch>
        <Route path="/" component={MainSection} />
      </Switch>
    </Router>
  );
};

export default App;
