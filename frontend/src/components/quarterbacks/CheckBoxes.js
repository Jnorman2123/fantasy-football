import React, { Component } from "react";

class CheckBoxes extends Component {
  render() {
    console.log(this.props.stats);
    return (
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
        >
          Hide Stat
        </button>
        <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
          <li>
            <input type="checkbox" className="form-check-input" />
            Stat
          </li>
          {/* <div className="form-check dropdown-item">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" value="" />
              Stat
            </label>
          </div> */}
          {/* <div className="form-check dropdown-item">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" value="" />
              Other Stat
            </label>
          </div> */}
        </ul>
      </div>
    );
  }
}

export default CheckBoxes;
