import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuarterbacks } from "../actions/quarterbacks/quarterbackActions";
import Quarterback from "../components/quarterbacks/Quarterback";
import Quarterbacks from "../components/quarterbacks/Quarterbacks";

class QuarterbacksContainer extends Component {
  componentDidMount() {
    this.props.fetchQuarterbacks();
  }

  renderQuarterbacks = () => {
    if (this.props.quarterbacks.requesting === true) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <table class="table-bordered table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Team</th>
                <th scope="col">Pass Attempts</th>
                <th scope="col">Pass Completions</th>
                <th scope="col">Completion Percentage</th>
                <th scope="col">Pass Yards</th>
                <th scope="col">Pass Touchdowns</th>
                <th scope="col">Rush Attempts</th>
                <th scope="col">Rush Yards</th>
                <th scope="col">Rush Touchdowns</th>
                <th scope="col">Total Touchdowns</th>
                <th scope="col">Interceptions</th>
                <th scope="col">Fumbles</th>
                <th scope="col">Games</th>
                <th scope="col">Points</th>
                <th scope="col">Points Per Game</th>
                <th scope="col">Average VOR</th>
                <th scope="col">Starters VOR</th>
              </tr>
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
        <h1 class="d-flex justify-content-center">Quarterbacks</h1>
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
