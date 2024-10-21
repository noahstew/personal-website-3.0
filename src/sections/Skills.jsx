import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import SectionHeader from "../components/general_use/SectionHeader";
import SkillsCard from "../components/skills/SkillsCard";

let textLanguageList = ["JavaScript", "Python", "Java", "C++", "C"];
let textFrameworkList = ["React", "Node.js", "Express", "Flask", "Django"];
let textToolList = ["Git", "GitHub", "VS Code", "Postman", "Heroku"];

export default function Skills() {
  return (
    <>
      <SectionHeader sectionId="skills" title="Skills" />
      <div className="row">
        <SkillsCard
          skillType="Languages"
          skillTextList={textLanguageList}
          skillIconList={null}
        />
        <SkillsCard
          skillType="Frameworks"
          skillTextList={textFrameworkList}
          skillIconList={null}
        />
        <SkillsCard
          skillType="Tech Tools"
          skillTextList={textToolList}
          skillIconList={null}
        />
      </div>
    </>
  );
}
