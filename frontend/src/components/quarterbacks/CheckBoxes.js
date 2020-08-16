import React, { Component } from "react";

class CheckBoxes extends Component {
  render() {
    return (
      <div className="dropdown" id="valueItemDrop">
        <button
          className="selectbox"
          id="dLabel"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select
        </button>
        <ul className="dropdown-menu" aria-labelledby="dLabel">
          <li className="checkbox form-group">
            <input
              type="checkbox"
              id="valuePot"
              value="Value Pot"
              name="Value Pot"
            />
            <label htmlFor="valuePot">Value Pot</label>
          </li>
          <li className="checkbox form-group">
            <input
              type="checkbox"
              id="payback"
              value="Payback"
              name="Payback"
            />
            <label htmlFor="payback">Payback</label>
          </li>
          <li className="checkbox form-group">
            <input
              type="checkbox"
              id="writeOff"
              value="Write-off"
              name="Write-off"
            />
            <label htmlFor="writeOff">Write-off</label>
          </li>
          <li className="checkbox form-group">
            <input type="checkbox" id="offset" value="Offset" name="Offset" />
            <label htmlFor="offset">Offset</label>
          </li>
          <li className="checkbox form-group">
            <input
              type="checkbox"
              id="genValuePot"
              value="Gen Value Pot"
              name="Gen Value Pot"
            />
            <label htmlFor="genValuePot">Gen Value Pot</label>
          </li>
          <li className="checkbox form-group">
            <input
              type="checkbox"
              id="mancValuePot"
              value="Manc Value Pot"
              name="Manc Value Pot"
            />
            <label htmlFor="mancValuePot">Manc Value Pot</label>
          </li>
        </ul>
      </div>
    );
  }
}

export default CheckBoxes;
