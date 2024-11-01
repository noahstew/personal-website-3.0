import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import SectionHeader from "../components/general_use/SectionHeader";
import SkillType from "../components/skills/SkillType";
import SkillCard from "../components/skills/SkillCard";

export default function Skills() {
  const [skillType, setSkillType] = useState("All");

  function switchSkillType(type) {
    if (skillType === type) return;
    setSkillType(type);
  }

  return (
    <div className="mx-10">
      <SectionHeader sectionId="skills" title="Skills" />
      <div className="row">
        <SkillType type="All" onClick={() => switchSkillType("All")} />
        <SkillType
          type="Frontend"
          onClick={() => switchSkillType("Frontend")}
        />
        <SkillType
          type="Backend"
          onClick={() => switchSkillType("Backend")}
        />
        <SkillType type="Web" onClick={() => switchSkillType("Web")} />
        <SkillType type="Mobile" onClick={() => switchSkillType("Mobile")} />
        <SkillType
          type="Languages"
          onClick={() => switchSkillType("Language")}
        />
        <SkillType
          type="Frameworks"
          onClick={() => switchSkillType("Framework")}
        />
        <SkillType
          type="Databases"
          onClick={() => switchSkillType("Database")}
        />
        <SkillType type="Tools" onClick={() => switchSkillType("Tool")} />
        <SkillType
          type="Data Science"
          onClick={() => switchSkillType("Data Science")}
        />
      </div>

      <div className="row">
        <SkillCard skillType={skillType}/>
      </div>
    </div>
  );
}
