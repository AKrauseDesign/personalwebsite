import React, { Component } from "react";
import IconBox from "../reusables/IconBox";

export default class Expertise extends Component {
  expertise = {
    data: [
      {
        text: "PHP",
        icon: "php",
        brand: true,
        brandColor: "#474A8A"
      },
      {
        text: "Ruby",
        icon: "gem",
        brand: false,
        brandColor: "#CC0000"
      },
      {
        text: "Python",
        icon: "python",
        brand: true,
        brandColor: "#4B8BBE"
      },
      {
        text: "Javascript",
        icon: "js",
        brand: true,
        brandColor: "#F7DF1E"
      },
      {
        text: "HTML",
        icon: "html5",
        brand: true,
        brandColor: "#E34F26"
      },
      {
        text: "SASS",
        icon: "sass",
        brand: true,
        brandColor: "#CC6699"
      },
      {
        text: "SQL",
        icon: "database",
        brand: false,
        brandColor: "#00758F"
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
              brandColor={expert.brandColor}
            />
          ))}
        </div>
      </section>
    );
  }
}
