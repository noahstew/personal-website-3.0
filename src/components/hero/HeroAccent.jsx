import React from "react";

export default function HeroAccent(props) {
    return (
        <div className="col-sm col-md-4">
          <h3>{props.header}</h3>
          <p>{props.subheader}</p>
        </div>
            );
}