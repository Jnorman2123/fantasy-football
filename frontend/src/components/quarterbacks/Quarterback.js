import React, { Component } from "react";

class Quarterback extends Component {
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

  createTableRows = () => {
    if (this.props.quarterbacks[0] !== undefined) {
      return this.props.quarterbacks.map((quarterback) => {
        return Object.entries(quarterback)
          .slice(1)
          .map(([key, value]) => {
            const newKey = key.replace(/\_/g, " ");
            const stat = newKey.charAt(0).toUpperCase() + newKey.slice(1);
            if (stat === this.props.stat) {
              return <td key={key}>{value}</td>;
            }
          });
      });
    }
  };

  render() {
    const rows = this.createTableRows();
    if (this.state.toggled === "on") {
      return (
        <tr>
          <th scope="col" onClick={this.handleToggle}>
            {this.props.stat}
          </th>
          {rows}
        </tr>
      );
    } else {
      return <></>;
    }
  }
}

export default Quarterback;
