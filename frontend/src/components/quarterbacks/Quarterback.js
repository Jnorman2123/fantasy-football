import React, { Component } from "react";

class Quarterback extends Component {
  createQuarterbacks = () => {
    return Object.entries(this.props.qb)
      .slice(1)
      .map(([key, value]) => {
        return <td key={key}>{value}</td>;
      });
  };

  render() {
    const rows = this.createQuarterbacks();
    return <tr>{rows}</tr>;
  }
}

export default Quarterback;
