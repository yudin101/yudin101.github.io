import { FaGithub } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import projectsList from "./projectsList";
import "./Projects.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Projects() {
  const handleMiniLinks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="projects-container">
        {projectsList.map((item, index) => (
          <Link
            to={`/projects/${item.name}`}
            className="project-box"
            key={index}
          >
            <img src={item.img} />
            <div className="project-info">
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <div className="link-box">
                {item.web && (
                  <a onClick={handleMiniLinks} href={item.web} target="_blank">
                    <CiGlobe />
                  </a>
                )}
                {item.source && (
                  <a
                    onClick={handleMiniLinks}
                    href={item.source}
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
