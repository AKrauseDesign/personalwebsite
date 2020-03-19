/* eslint-disable no-useless-constructor */
import React, { PureComponent } from "react";
import moment from "moment";
import "../components/sections/styles/Sections.scss";
import Button from "../components/reusables/Button";
import Contact from "../components/sections/Contact";

export default class CaseStudy extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: []
    };
  }

  modeCheck() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      return process.env.REACT_APP_LOCAL_API_BUILD;
    } else {
      return process.env.REACT_APP_AKRAUSEDESIGNAPI;
    }
  }

  componentDidMount() {
    fetch(this.modeCheck())
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            items: result
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }

  render() {
    const { error, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <div className="container" style={{ borderTop: "none" }}>
            <ul>
              {items.map(item => (
                <li key={item._id}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <p>{moment(item.date).format("MMMM Do, YYYY")}</p>
                </li>
              ))}
            </ul>
          </div>
          <Contact
            subtitle="How Can I Help You?"
            description="I’d love to meet with you and discuss your project. I’m comfortable working with innovative design, corporate branding structures, and a wide range of software engineering needs."
            topBorder={true}
          />
        </div>
      );
    }
  }
}
