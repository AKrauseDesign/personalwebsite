import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <h3 className="steps">{this.props.step}</h3>
        <h2 className="cardTitle">{this.props.title}</h2>
        <div className="card_content">
          <p>{this.props.content}</p>
        </div>
        <a href={this.props.url}>
          Learn More <i class="fal fa-long-arrow-right"></i>
        </a>
      </div>
    );
  }
}
