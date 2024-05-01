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
  // truss2,
  // truss3,
  // truss4,
  legolab1,
  fbookshelf2,
  coaster1,
  curl_calc_1,
  flicker_tit,
  ring_1,
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
              id="small"
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
              src={flicker_tit}
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
              src={curl_calc_1}
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
        <div className="project-item">
          <NavLink className="project-button" to="/fbookshelf">
            <h5 className="project-desc">Floating Bookshelf</h5>
            <input 
            type="image"
            alt="none :("
            className="project"
            id="small"
            src={fbookshelf2}
            />
          </NavLink>
        </div>
        <div className="project-item">
          <NavLink className="project-button" to="/Coaster">
            <h5 className="project-desc">3D Printer Coaster</h5>
            <input
              type="image"
              alt="none :("
              className="project"
              id="tall"
              src={coaster1}
            />
          </NavLink>
        </div>
        <div className="project-item">
          <NavLink className="project-button" to="/AlumRing">
            <h5 className="project-desc">Aluminum Ring</h5>
            <input
              type="image"
              alt="none :("
              className="project"
              id="small"
              src={ring_1}
            />
          </NavLink>
        </div>
        <div className="project-item">
          <NavLink className="project-button" to="/BonsaiTree">
            <h5 className="project-desc">Hobby: Bonsai Tree</h5>
            <input
              type="image"
              alt="none :("
              className="project"
              id="tall"
              src={coaster1}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Projects;
