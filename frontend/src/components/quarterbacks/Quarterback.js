import React, { Component } from "react";

class Quarterback extends Component {
  render() {
    return <p key={this.props.quarterback.id}>{this.props.quarterback.name}</p>;
  }
}

export default Quarterback;
