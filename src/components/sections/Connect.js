import React, { Component } from "react";
import Button from "../reusables/Button";

export default class ConnectWithMe extends Component {
  username = "akrausedesign";
  altUsername = "andrew-krause-54092292/";

  connections = {
    social: [
      {
        text: "Linkedin",
        icon: "linkedin-in",
        iconType: "brand",
        url: "https://www.linkedin.com/in/",
        altname: true
      },
      {
        text: "Dribbble",
        icon: "dribbble",
        iconType: "brand",
        url: "https://www.dribbble.com/",
        altname: false
      },
      {
        text: "Twitter",
        icon: "twitter",
        iconType: "brand",
        url: "https://www.twitter.com/",
        altname: false
      },
      {
        text: "Github",
        icon: "github",
        iconType: "brand",
        url: "https://www.github.com/",
        altname: false
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
                url={
                  connect.url +
                  (connect.altname ? this.altUsername : this.username)
                }
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
