import React, { Component } from 'react'; 
import Button from "../reusables/Button";

export default class Project extends Component { 
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div key={this.props.id}>
        <h3>{this.props.name}</h3> 
        <p>{this.props.description}</p>
        <Button text={this.props.name} />
      </div>
    )
  }
}

{/* <h2>Recent Projects</h2>
<h3>{this.props.projectTitle}</h3> 
<p>{this.props.description}</p>
<Button text="Check out the project" />  */}
