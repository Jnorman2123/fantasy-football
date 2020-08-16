import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuarterbacks } from "../actions/quarterbacks/quarterbackActions";
import QuarterbackTable from "../components/quarterbacks/QuarterbackTable";
import Quarterback from "../components/quarterbacks/Quarterback";
import Stat from "../components/quarterbacks/Stat";
// import CheckBoxes from "../components/quarterbacks/CheckBoxes";

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
    const qbs = this.props.quarterbacks.quarterbacks;
    if (qbs !== undefined) {
      return qbs.map((qb) => {
        return <Quarterback key={qb.name} qb={qb} />;
      });
    }
  };

  renderStats = () => {
    const stats = this.createStats();
    if (stats !== undefined) {
      return (
        <>
          {stats.map((stat) => {
            return <Stat key={stat} stat={stat} />;
          })}
        </>
      );
    }
  };

  render() {
    return (
      <div>
        <QuarterbackTable
          renderQuarterbacks={this.renderQuarterbacks}
          renderStats={this.renderStats}
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
