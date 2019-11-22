import React, { Component } from "react";
import IconBox from "../reusables/IconBox";

export default class Expertise extends Component {
  expertise = {
    data: [
      {
        text: "Wordpress",
        icon: "wordpress",
        brand: true
      },
      {
        text: "Python",
        icon: "python",
        brand: true
      },
      {
        text: "Javascript",
        icon: "js",
        brand: true
      },
      {
        text: "HTML",
        icon: "html5",
        brand: true
      },
      {
        text: "SASS",
        icon: "sass",
        brand: true
      },
      {
        text: "SQL",
        icon: "database",
        brand: false
      }
    ]
  };
  render() {
    return (
      <section id="expertise">
        <div className="container">
          <h2>Expertise</h2>
          {this.expertise.data.map(expert => (
            <IconBox
              text={expert.text}
              icon={expert.icon}
              iconType={expert.brand ? "brand" : null}
            />
          ))}
        </div>
      </section>
    );
  }
}
