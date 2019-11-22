import React, { Component } from "react";
import IconBox from "../reusables/IconBox";

export default class Expertise extends Component {
  render() {
    return (
      <div>
        <h2>Expertise</h2>
        <IconBox text="Wordpress" icon="wordpress" iconType="brand" />
        <IconBox text="Python" icon="python" iconType="brand" />
        <IconBox text="Javascript" icon="js" iconType="brand" />
        <IconBox text="HTML" icon="html5" iconType="brand" />
        <IconBox text="SASS" icon="sass" iconType="brand" />
        <IconBox text="SQL" icon="database" />
      </div>
    );
  }
}
