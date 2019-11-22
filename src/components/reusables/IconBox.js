import React, { Component } from "react";
import Icon from "./Icon";

export default class IconBox extends Component {
  render() {
    return (
      <div className="iconbox">
        <div class="iconbox-container">
          <Icon
            iconType={this.props.iconType}
            icon={this.props.icon}
            brandColor={this.props.brandColor}
          />
          <h4>{this.props.text}</h4>
        </div>
      </div>
    );
  }
}
