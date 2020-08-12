import React from "react";

const Quarterbacks = (props) => {
  return (
    <table className="table table-bordered">
      <tbody>{props.renderQuarterbacks()}</tbody>
    </table>
  );
};

export default Quarterbacks;
