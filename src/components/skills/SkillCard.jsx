import { skills } from "../../utils/skills";

export default function SkillsSection(props) {
  // Filter skills based on the specified category in props.skillType
  if (props.skillType === "All") {
    return (
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <img src={skill.imgSrc} alt={skill.name} className="w-16 h-16" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    );
  } else {
    const filteredSkills = skills.filter((skill) =>
      skill.categories.includes(props.skillType)
    );

    return (
      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <img src={skill.imgSrc} alt={skill.name} className="w-16 h-16" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    );
  }
}
