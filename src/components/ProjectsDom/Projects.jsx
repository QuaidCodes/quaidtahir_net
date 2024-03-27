import FeaturedProject from "./FeaturedProject/FeaturedProject";
import ProjectCard from "./ProjectCard/ProjectCard";

import "./Projects.css";

function Projects() {
  const data = [
    {
      id: 1,
      name: "Banking System",
      description: "",
      bullet1: "",
      bullet2: "",
    },
    {
      id: 2,
      name: "POS System",
      description: "",
      bullet1: "",
      bullet2: "",
    },
    {
      id: 3,
      name: "Blogging Site",
      description: "",
      bullet1: "",
      bullet2: "",
    },
    {
      id: 4,
      name: "Social Media",
      description: "",
      bullet1: "",
      bullet2: "",
    },
    {
      id: 5,
      name: "Inventory System",
      description: "",
      bullet1: "",
      bullet2: "",
    },
  ];

  return (
    <section className="projects">
      <FeaturedProject />

      <div className="project-cards">
        {data.map((item) => (
          <ProjectCard
            name={item.name}
            description={item.description}
            bullet1={item.bullet1}
            bullet2={item.bullet2}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
