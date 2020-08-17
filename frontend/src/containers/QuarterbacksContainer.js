import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuarterbacks } from "../actions/quarterbacks/quarterbackActions";
import QuarterbackTable from "../components/quarterbacks/QuarterbackTable";
import Quarterback from "../components/quarterbacks/Quarterback";
import Stat from "../components/quarterbacks/Stat";
import CheckBoxes from "../components/quarterbacks/CheckBoxes";

const state = {
  Name: "on",
  Team: "on",
  Ints: "on",
  Fumbs: "on",
  "Rush atts": "on",
  "Rush yards": "on",
  "Rush tds": "on",
  "Pass atts": "on",
  "Pass comps": "on",
  "Comp perc": "on",
  "Pass yards": "on",
  "Pass tds": "on",
  Games: "on",
  Points: "on",
  "Points per game": "on",
  "Pass per td": "on",
  "Yards per pass": "on",
  "Yards per comp": "on",
  "Rush per td": "on",
  "Yards per rush": "on",
  "Total att": "on",
  "Att per game": "on",
  "Points per att": "on",
  "Att per td": "on",
  "Avg vor": "on",
  "Starting vor": "on",
};

class QuarterbacksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = state;
  }

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

  handleToggle = (event) => {
    this.state[event.target.innerText] === "on"
      ? this.setState({ [event.target.innerText]: "off" })
      : this.setState({ [event.target.innerText]: "on" });
  };

  renderQuarterbacks = () => {
    const qbs = this.props.quarterbacks.quarterbacks;
    if (qbs !== undefined) {
      return qbs.map((qb) => {
        return <Quarterback key={qb.name} qb={qb} stats={this.state} />;
      });
    }
  };

  renderStats = () => {
    const stats = this.createStats();
    if (stats !== undefined) {
      return (
        <>
          {stats.map((stat) => {
            const toggled = this.state[stat];
            return (
              <Stat
                handleToggle={this.handleToggle}
                key={stat}
                stat={stat}
                toggled={toggled}
              />
            );
          })}
        </>
      );
    }
  };

  render() {
    const stats = this.createStats();
    return (
      <div>
        <div>
          <CheckBoxes stats={stats} />
        </div>
        <div>
          <QuarterbackTable
            renderQuarterbacks={this.renderQuarterbacks}
            renderStats={this.renderStats}
          />
        </div>
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
