import React, { Component } from "react";

class Stat extends Component {
  render() {
    if (this.props.toggled === "on") {
      return (
        <td onClick={this.props.handleToggle} toggled={this.props.toggled}>
          {this.props.stat}
        </td>
      );
    } else {
      return <></>;
    }
  }
}

export default Stat;
