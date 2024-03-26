
import "./ProjectCard.css";

function ProjectCard(props) {
    return <div className="project-card">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <ul>
            <li>{props.bullet1}</li>
            <li>{props.bullet2}</li>
        </ul>
    </div>
}

export default ProjectCard;