import projectImage from "../../../images/tara-winstead-AI.jpg";
import "./FeaturedProject.css";

function FeaturedProject() {
  const projectTitle = "Artificial Intelligence";
  const description = "";

  return (
    <section className="featured-project">
        <h1>Featured Project</h1>
        <div className="featured-header">
          <img
            className="featured-image"
            src={projectImage}
            alt={projectTitle}
          />
          <div className="featured-title">{projectTitle}</div>
        </div>
        <div className="featured-description">
          <p>{description}</p>
        </div>
    </section>
  );
}

export default FeaturedProject;
