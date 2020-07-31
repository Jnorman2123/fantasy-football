import React, { Component } from "react";

class Quarterback extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.quarterback.name}</td>
        <td>{this.props.quarterback.team}</td>
        <td>{this.props.quarterback.pass_atts}</td>
        <td>{this.props.quarterback.pass_comps}</td>
        <td>{this.props.quarterback.comp_perc}</td>
        <td>{this.props.quarterback.pass_yards}</td>
        <td>{this.props.quarterback.pass_tds}</td>
        <td>{this.props.quarterback.rush_atts}</td>
        <td>{this.props.quarterback.rush_yards}</td>
        <td>{this.props.quarterback.rush_tds}</td>
        <td>{this.props.quarterback.total_tds}</td>
        <td>{this.props.quarterback.ints}</td>
        <td>{this.props.quarterback.fumbs}</td>
        <td>{this.props.quarterback.games}</td>
        <td>{this.props.quarterback.points}</td>
        <td>{this.props.quarterback.points_per_game}</td>
        <td>{this.props.quarterback.avg_vor}</td>
        <td>{this.props.quarterback.starting_vor}</td>
      </tr>
    );
  }
}

export default Quarterback;
