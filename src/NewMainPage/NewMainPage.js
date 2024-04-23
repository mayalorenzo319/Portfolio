import React from "react";
import Projects from "./Projects";

import { filelines, linkedin } from "../images";
import resume from "../documents/Resume-Lorenzo-Maya.pdf";
import ToolTip from "@mui/material/Tooltip";

function NewMainPage() {
  return (
    <div>
      <div className="mobile-display">
        {/* <Header /> */}
        <div className="main-container">
          {/* <AboutMe /> */}
          <div className="secondary-container">
            <div className="portfolio-welcome-message">
              {/* TODO: Change these to be what match with your information*/}
              <h2>Hi, I'm Maya Lorenzo!</h2>
              <p>
                I'm a Junior at Tulane University, graduating in Spring of 2025
                with a BSE in Engineering Physics and certificate in Mechanical Engineering currently looking for internships in the NY Metro Area
              </p>
              <p>Please feel free to contact me at mayalorenzo17@gmail.com or 201.205.8759 </p>
              {/* TODO: You probably don't want this line to be like this */}
              <span id="desc">
                I have designed this website using ReactJS, HTML, and CSS. The
                repository for this website can be found{" "} *under construction*
                <a
                  className="github-repo-link"
                  href="https://github.com/MadBeignet/Portfolio"
                >
                  here
                </a>
              </span>
              <div className="info-grid">
                <div>
                  <p>Resume</p>
                  {/* TODO: Change resume file */}
                  <a href={resume} download>
                    <ToolTip title="Download Resume">
                      <img alt="none :(" className="icon" src={filelines} />
                    </ToolTip>
                  </a>
                </div>
                <div>
                  <p>LinkedIn</p>
                  {/* TODO: Change linkedin link */}
                  <a href="https://www.linkedin.com/in/maya-lorenzo/">
                    <ToolTip title="View LinkedIn">
                      <img
                        alt="none :("
                        className="icon"
                        id="larger"
                        src={linkedin}
                      />
                    </ToolTip>
                  </a>
                </div>
                {/* <div>
                  <p>GitHub</p>
                  {/* TODO: Find something more relevant, I will help you add it */}
                  {/* <a href="https://www.github.com/MadBeignet"> 
                    <ToolTip title="View Github">
                      <img
                        alt="none :("
                        className="icon"
                        id="larger"
                        src={githubicon}
                      />
                    </ToolTip>
                  </a>
                </div> */}
              </div>
              <Projects />
            </div>
          </div>
        </div>
      </div>
      <div className="desktop-display">
        {/* <Header /> */}
        <div className="main-container">
          {/* <AboutMe /> */}
          <div className="secondary-container">
            <div className="portfolio-welcome-message">
              {/* TODO: Change these to be what match with your information*/}
              <h2>Hi, I'm Maya Lorenzo!</h2>
              <p>
                I'm a Junior at Tulane University, graduating in Spring of 2025
                with a BSE in Engineering Physics and certificate in Mechanical Engineering currently looking for internships in the NY Metro Area
              </p>
              <p>Please feel free to contact me at mayalorenzo17@gmail.com or 201.205.8759 </p>
              <span id="desc">
                I have designed this website using ReactJS, HTML, and CSS. The
                repository for this website can be found{" "}*under construction*
                <a
                  className="github-repo-link"
                  href="https://github.com/MadBeignet/Portfolio"
                >
                  here
                </a>
              </span>
              <span className="info-grid">
                <div>
                  <p>Resume</p>
                  {/* Update resume doc */}
                  <a href={resume} download>
                    <ToolTip title="Download Resume">
                      <img alt="none :(" className="icon" src={filelines} />
                    </ToolTip>
                  </a>
                </div>
                <div>
                  <p>LinkedIn</p>
                  {/* TODO: Change linkedin link*/}
                  <a href="https://www.linkedin.com/in/maya-lorenzo/">
                    <ToolTip title="View LinkedIn">
                      <img
                        alt="none :("
                        className="icon"
                        id="larger"
                        src={linkedin}
                      />
                    </ToolTip>
                  </a>
                </div>
                {/* <div>
                  <p>GitHub</p>
                  {/* TODO: Replace with something else */}
                  {/* <a href="https://www.github.com/MadBeignet">
                    <ToolTip title="View Github">
                      <img
                        alt="none :("
                        className="icon"
                        id="larger"
                        src={githubicon}
                      />
                    </ToolTip>
                  </a>
                </div> */}
              </span>
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMainPage;
