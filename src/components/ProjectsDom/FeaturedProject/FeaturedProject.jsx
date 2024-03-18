
import projectImage from "../../../images/tara-winstead-AI.jpg"
import "./FeaturedProject.css";

function FeaturedProject() {
    
    const projectTitle = "Artificial Intelligence";
    const description = "";

  return (
    <div className="featured-project">
      <div className="featured-header">
        <img className="featured-image" src={projectImage} alt={projectTitle} />
        <div className="featured-title">{projectTitle}</div>
      </div>
      <div className="featured-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeaturedProject;
