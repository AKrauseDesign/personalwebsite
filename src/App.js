import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "./components/sections/styles/Sections.scss";
import Navigation from "./components/sections/Nav";
import logo from "./images/big-logo.svg";
import smallLogo from "./images/small-logo.svg";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Footer from "./components/sections/Footer";
import CaseStudy from "./pages/CaseStudies";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation logo={logo} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cases" exact component={CaseStudy} />
            <Route component={Error} />
          </Switch>
          <Footer footerPic={smallLogo} picAlt="Andrew Krause Logo small" />
        </div>
      </Router>
    );
  }
}
