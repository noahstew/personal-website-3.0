import React from "react";

export default function SkillsSection(props) {
  return (
    <div className="col-sm col-md-4">
      <h3>{props.skillType}</h3>
        <ul>
            {props.skillTextList.map((skillText, index) => {
            return (
                <li key={index}>
                {props.skillIconList ? (
                    <i className={props.skillIconList[index]}></i>
                ) : null}
                {skillText}
                </li>
            );
            })}
        </ul>
    </div>
  );
}
