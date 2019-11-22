import React, { Component } from "react";
import Button from "../reusables/Button";

export default class ConnectWithMe extends Component {
  render() {
    return (
      <div>
        <h2>Connect With Me</h2>
        <div class="connection-links">
          <Button text="LinkedIn" icon="linkedin-in" iconType="brand" />
          <Button text="Dribbble" icon="dribbble" iconType="brand" />
          <Button text="Twitter" icon="twitter" iconType="brand" />
          <Button text="Github" icon="github" iconType="brand" />
        </div>
      </div>
    );
  }
}
