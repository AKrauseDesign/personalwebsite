import React, { Component } from "react";
import Button from "../reusables/Button";

export default class ConnectWithMe extends Component {
  username = "akrausedesign";

  connections = {
    social: [
      {
        text: "Linkedin",
        icon: "linkedin-in",
        iconType: "brand",
        url: "https://www.linkedin.com/in/"
      },
      {
        text: "Dribbble",
        icon: "dribbble",
        iconType: "brand",
        url: "https://www.dribbble.com/"
      },
      {
        text: "Twitter",
        icon: "twitter",
        iconType: "brand",
        url: "https://www.twitter.com/"
      },
      {
        text: "Github",
        icon: "github",
        iconType: "brand",
        url: "https://www.github.com/"
      }
    ]
  };

  render() {
    return (
      <section id="connect">
        <div className="container">
          <h2>Connect With Me</h2>
          <div class="connection-links">
            {this.connections.social.map(connect => (
              <Button
                key={connect.id}
                text={connect.text}
                icon={connect.icon}
                iconType={connect.iconType}
                url={connect.url + this.username}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
