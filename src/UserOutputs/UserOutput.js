import React from "react";
import "./UserOutput.css";

const userInputs = (props) => {
  return (
    <div className="UserOutput">
      <p>{props.output1}</p>
      <p>{props.output2}</p>
    </div>
  );
};

export default userInputs;
