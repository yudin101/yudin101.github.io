import { useParams } from "react-router-dom";
import projectsList from "../Projects/projectsList";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { name } = useParams<{ name: string }>();
  const project = projectsList.filter((project) => project.name == name)[0];

  return (
    <div className="project-container">
      <div className="details-container">
        <h1 className="project-name">
          {project.web ? (
            <a className="project-name" href={project.web} target="_blank">
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h1>
        {project.source ? (
          <a className="project-source" href={project.source} target="_blank">
            Source Code
          </a>
        ) : null}
        <p className="project-desc">{project.desc}</p>
        <p className="project-more">{project.more}</p>
        <div className="project-stack">
          <p className="stack-title">Stack: </p>
          <ul>
            {project.stack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      <img src={project.img} className="project-image" />
    </div>
  );
};

export default ProjectDetails;
