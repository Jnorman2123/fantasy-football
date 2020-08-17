import React, { Component } from "react";

class QuarterbackTable extends Component {
  render() {
    return (
      <table className="table table-bordered table-sm bg-dark">
        <thead>
          <tr>{this.props.renderStats()}</tr>
        </thead>
        <tbody>{this.props.renderQuarterbacks()}</tbody>
      </table>
    );
  }
}

export default QuarterbackTable;
