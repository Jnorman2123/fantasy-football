import React, { Component } from "react";

class Stat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: "on",
    };
  }

  handleToggle = () => {
    this.state.toggled === "on"
      ? this.setState({ toggled: "off" })
      : this.setState({ toggled: "on" });
  };

  render() {
    return (
      <td
        onClick={this.handleToggle}
        id={this.props.stat}
        toggled={this.state.toggled}
      >
        {this.props.stat}
      </td>
    );
  }
}

export default Stat;
