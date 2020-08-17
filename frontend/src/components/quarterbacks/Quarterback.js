import React, { Component } from "react";

class Quarterback extends Component {
  createQuarterbacks = () => {
    return Object.entries(this.props.qb)
      .slice(1)
      .map(([key, value]) => {
        const newKey = key.replace(/\_/g, " ");
        const stat = newKey.charAt(0).toUpperCase() + newKey.slice(1);
        if (this.props.stats[stat] === "on") {
          return <td key={stat}>{value}</td>;
        }
      });
  };

  render() {
    const rows = this.createQuarterbacks();
    return <tr>{rows}</tr>;
  }
}

export default Quarterback;
