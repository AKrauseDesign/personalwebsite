/* eslint-disable no-useless-constructor */
import React, { PureComponent } from "react";
import "../components/sections/styles/Sections.scss";
import Button from "../components/reusables/Button";
import Contact from "../components/sections/Contact";

export default class CaseStudy extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch(process.env.REACT_APP_AKRAUSEDESIGNAPI)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
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
