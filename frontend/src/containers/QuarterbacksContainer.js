import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuarterbacks } from "../actions/quarterbacks/quarterbackActions";
import Quarterbacks from "../components/quarterbacks/Quarterbacks";
import Quarterback from "../components/quarterbacks/Quarterback";

class QuarterbacksContainer extends Component {
  componentDidMount() {
    this.props.fetchQuarterbacks();
  }

  createStats = () => {
    if (this.props.quarterbacks.quarterbacks[0] !== undefined) {
      return Object.keys(this.props.quarterbacks.quarterbacks[0])
        .slice(1)
        .map((key) => {
          const newKey = key.replace(/\_/g, " ");
          return newKey.charAt(0).toUpperCase() + newKey.slice(1);
        });
    }
  };

  renderQuarterbacks = () => {
    const stats = this.createStats();
    if (stats !== undefined) {
      return stats.map((stat) => {
        return (
          <Quarterback
            key={stat}
            stat={stat}
            quarterbacks={this.props.quarterbacks.quarterbacks}
          />
        );
      });
    }
  };

  render() {
    return (
      <div>
        <Quarterbacks
          renderQuarterbacks={this.renderQuarterbacks}
          quarterbacks={this.props.quarterbacks.quarterbacks}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quarterbacks: state.quarterbacks,
    requesting: state.requesting,
  };
}

export default connect(mapStateToProps, { fetchQuarterbacks })(
  QuarterbacksContainer
);
