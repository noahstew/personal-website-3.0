import "bootstrap/dist/css/bootstrap.min.css";

import SectionHeader from "../components/general_use/SectionHeader";
import SkillsCard from "../components/skills/SkillsCard";

let textLanguageList = ["HTML", "CSS", "Javascript", "Java", "Python", "Dart", "SQL", "R"];
let textFrameworkList = ["React", "JQuery", "NextJS", "NodeJS",  "ExpressJS", "Tailwind", "Bootstrap",  "Flutter"];
let textToolList = ["Git", "GitHub", "JUnit5", "Firebase", "PostgresSQL", "MySQL", "Excel", "Tableau"];

export default function Skills() {
  return (
    <div className="mx-10">
      <SectionHeader sectionId="skills" title="Skills" />
      <div className="row">
        <SkillsCard
          skillType="Languages"
          skillTextList={textLanguageList}
        />
        <SkillsCard
          skillType="Frameworks"
          skillTextList={textFrameworkList}
        />
        <SkillsCard
          skillType="Tools"
          skillTextList={textToolList}
          skillIconList={null}
        />
      </div>
    </div>
  );
}
