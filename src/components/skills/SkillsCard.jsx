import React from "react";

export default function SkillsSection(props) {
  return (
    <div className="col-sm col-md-4">
      <h3>{props.skillType}</h3>
      <ul>
        {props.skillTextList.map((skillText, index) => {
          return (
            <li key={index}>
              {skillText.toLowerCase()}
              <img
                src={`/icons/${props.skillType}/${skillText.toLowerCase()}.png`}
                alt={`${skillText} icon`}
                height="60"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
