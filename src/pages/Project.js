import React from "react";
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from "../components/ProjectItem";
import "../styles/Project.css";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="project">
      <div className="projectContainer">
        <h1 className="projectHeader">Projects</h1>
        <div className="projectList">
          {ProjectList.map((projectItem, key) => {
            return (
              <Link to={projectItem.link} className="linkToGithub" target="_blank" rel="noopener noreferrer">
                <ProjectItem
                  key={key}
                  title={projectItem.title}
                  desc={projectItem.desc}
                  image={projectItem.image}
                />
              </Link>
            );
          })}
        </div>
        <h2 className="conc"> More to come! </h2>
      </div>
    </div>
  );
}

export default Project;
