import React, { Component } from "react";

class QuarterbackStat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: "on",
    };
  }

  toggle = () => {
    if (this.state.toggled === "on") {
      this.setState(
        {
          toggled: "off",
        },
        () => {
          console.log(this.state.toggled);
        }
      );
    } else if (this.state.toggled === "off") {
      this.setState(
        {
          toggled: "on",
        },
        () => {
          console.log(this.state.toggled);
        }
      );
    }
  };

  render() {
    return (
      <button onClick={this.toggle} toggled={this.state.toggled}>
        {this.props.stat}
      </button>
    );
  }
}

export default QuarterbackStat;
