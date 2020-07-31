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
          <h2>Name</h2>
          <ul>
            {this.props.quarterbacks.quarterbacks.map((quarterback) => {
              return (
                <li>
                  <Quarterback key={quarterback.id} quarterback={quarterback} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Quarterbacks</h1>
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
