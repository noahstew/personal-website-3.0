import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionHeader from "../components/general_use/SectionHeader";
import ProjectType from "../components/projects/ProjectType";
import ProjectCard from "../components/projects/ProjectCard";
import projects from "../utils/project";

export default function Projects() {
  const [projectType, setProjectType] = useState("Web");

  function switchProjectType(type) {
    if (projectType === type) return;
    setProjectType(type);
  }

  return (
    <>
      <SectionHeader sectionId="projects" title="Projects" />
      <div className="row">
        <ProjectType type="Web" onClick={() => switchProjectType("Web")} />
        <ProjectType
          type="Mobile"
          onClick={() => switchProjectType("Mobile")}
        />
        <ProjectType type="WebGL" onClick={() => switchProjectType("WebGL")} />
      </div>
      <div className="row">
        {projects.map((project, index) => {
          if (project.type === projectType) {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                tech={project.tech}
                description={project.description}
                link={project.link}
                img={project.img}
              />
            );
          }
        })}
      </div>
    </>
  );
}
