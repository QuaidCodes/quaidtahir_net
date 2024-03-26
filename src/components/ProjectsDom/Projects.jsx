
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import ProjectCard from "./ProjectCard/ProjectCard";

import "./Projects.css";

function Projects() {
    return <section className="projects">
        <FeaturedProject />
        <ProjectCard />
    </section>
}

export default Projects;