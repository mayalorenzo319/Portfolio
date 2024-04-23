import React from "react";
import { NavLink } from "react-router-dom";
// TODO: Update image imports
import {
  // machinemanager,
  // watersensor,
  // nextfavartist2,
  // joustremakeimg,
  // prototype,
  trussbust1,
  flicker1,
  // matlab1,
  // truss2,
  // truss3,
  // truss4,
  legolab1,
  shrink1,
} from "../images";
import "./NewMainPage.css";

// TODO: This is where you will also want to update project names, links, and images
// prototype is the name of the image i used, given inside src/images/index.js
function Projects() {
  return (
    <div className="projects">
      <h1 align="middle">Projects</h1>
      <div className="project-container" align="middle">
      <div className="project-item">
          <NavLink className="project-button" to="/truss-bust">
            <h5 className="project-desc">Truss Bust</h5>
            <input
              type="image"
              alt="none :("
              className="project"
              id="tall"
              src={trussbust1}
            />
          </NavLink>
        </div>
        <div className="project-item">
          <NavLink className="project-button" to="/flicker">
            <h5 className="project-desc">Flicker</h5>
            <input
              type="image"
              alt="none :("
              className="project"
              id="tall"
              src={flicker1}
            />
          </NavLink>
        </div>
        <div className="project-item">
          <NavLink className="project-button" to="/shrinkage-calculator">
            <h5 className="project-desc">Shrinkage Calculator</h5>
            <input
              type="image"
              alt="none :("
              className="project"
              id="tall"
              src={matlab1}
            />
          </NavLink>
        </div>
        <div className="project-item">
          <NavLink className="project-button" to="/LegoLab">
            <h5 className="project-desc">Lego Lab</h5>
            <input
              type="image"
              alt="none :("
              className="project"
              id="tall"
              src={legolab1}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Projects;
