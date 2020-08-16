import React, { Component } from "react";

class Stat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: "on",
    };
  }

  render() {
    return (
      <td id={this.props.stat} toggled={this.state.toggled}>
        {this.props.stat}
      </td>
    );
  }
}

export default Stat;
