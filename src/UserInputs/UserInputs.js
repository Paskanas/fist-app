import React from "react";
import "./UserInputs.css";

const userInputs = (props) => {
  return (
    <div className="UserInputs">
      {/* <input>First input</input>; */}
      <input
        type="text"
        onChange={props.changed}
        value={props.defaultInput}
      ></input>
    </div>
  );
};

export default userInputs;
