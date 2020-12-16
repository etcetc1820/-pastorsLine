import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./core/features/MainSection";
import "./assets/scss/reset.scss";
import { Provider } from "react-redux";
import store from "./core/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
