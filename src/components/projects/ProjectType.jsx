import React from "react";

export default function ProjectType(props) {
  return (
    <div className="col-4">
      <button onClick={props.onClick} >
        <h3>{props.type}</h3>
      </button>
    </div>
  );
}
