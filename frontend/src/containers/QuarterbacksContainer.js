import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuarterbacks } from "../actions/quarterbacks/quarterbackActions";
import Quarterback from "../components/quarterbacks/Quarterback";
import Quarterbacks from "../components/quarterbacks/Quarterbacks";

class QuarterbacksContainer extends Component {
  componentDidMount() {
    this.props.fetchQuarterbacks();
  }

  createStats = () => {
    if (this.props.quarterbacks.quarterbacks[0] !== undefined) {
      return Object.keys(this.props.quarterbacks.quarterbacks[0]).map((key) => {
        const newKey = key.replace(/\_/g, " ");
        return newKey.charAt(0).toUpperCase() + newKey.slice(1);
      });
    }
  };

  createTableHeads = () => {
    const stats = this.createStats();
    if (stats !== undefined) {
      return stats.map((stat) => {
        return (
          <th key={stat} scope="col">
            {stat}
          </th>
        );
      });
    }
  };

  renderQuarterbacks = () => {
    if (this.props.quarterbacks.requesting === true) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <table className="table-bordered table-striped">
            <thead>
              <tr>{this.createTableHeads()}</tr>
            </thead>
            <tbody>
              {this.props.quarterbacks.quarterbacks.map((quarterback, i) => {
                return <Quarterback key={i} quarterback={quarterback} />;
              })}
            </tbody>
          </table>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h1 className="d-flex justify-content-center">Quarterbacks</h1>
        <Quarterbacks
          props={this.props}
          renderQuarterbacks={this.renderQuarterbacks}
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
