import { FaGithub } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import ProjectsList from "./ProjectsList";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="projects-container">
        {ProjectsList.map((item, index) => (
          <div className="project-box" key={index}>
            <img src={item.img} />
            <div className="project-info">
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <div className="link-box">
                {item.web && (
                  <a href={item.web} target="_blank">
                    <CiGlobe />
                  </a>
                )}
                {item.source && (
                  <a href={item.source} target="_blank">
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
