import React from "react";
import project1 from "../Static/cyber1.jpeg";
import project2 from "../Static/cyber2.jpeg";
import project3 from "../Static/cyber4.jpeg";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="main--container" id="project">
      <div className="black-container">
        <div className="content-headding">
          Our Projects
          <div className="content-sub">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
          <div className="projects">
            <div className="project-display-container">
              <div className="project-imgage">
                <img className="project-image" src={project1} alt="project" />
              </div>
              <div className="project-content-hedding">BabyCart</div>
              <div className="project-content-content">
                Babycart is an online website designed to display the latest
                products offered by the store.
              </div>
            </div>
            <div className="project-display-container">
              <div className="project-imgage">
                <img className="project-image" src={project2} alt="project" />
              </div>
              <div className="project-content-hedding">BabyCart</div>
              <div className="project-content-content">
                Babycart is an online website designed to display the latest
                products offered by the store.
              </div>
            </div>
            <div className="project-display-container">
              <div className="project-imgage">
                <img className="project-image" src={project3} alt="project" />
              </div>
              <div className="project-content-hedding">BabyCart</div>
              <div className="project-content-content">
                Babycart is an online website designed to display the latest
                products offered by the store.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
