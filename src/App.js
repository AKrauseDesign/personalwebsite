import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "./components/sections/styles/Sections.scss";
import Navigation from "./components/sections/Nav";
import logo from "./images/big-logo.svg";
import smallLogo from "./images/small-logo.svg";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import RewardsExtraTheMovie from "./pages/cases/RewardsExtraTheMovie";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation logo={logo} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path={"/case-study/RewardsExtraTheMovie"}
              exact
              component={RewardsExtraTheMovie}
            />
            <Route component={Error} />
          </Switch>
          <Contact
            subtitle="What do you need?"
            description="I’d love to meet with you and discuss your project. I’m comfortable working with innovative design, corporate branding structures, and a wide range of software engineering needs."
          />
          <Footer footerPic={smallLogo} picAlt="Andrew Krause Logo small" />
        </div>
      </Router>
    );
  }
}
