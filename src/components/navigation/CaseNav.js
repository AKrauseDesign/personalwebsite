import React from "react";
import NavContact from "../contact/NavContact";

const CaseNav = ({ title, steps }) => {
  console.log(steps);
  return (
    <div className="casenav">
      <div className="casenav_pattern_bg"></div>
      <div className="container">
        <nav>
          <div className="steps_container">
            <p>
              <span>The Steps:</span>
              <ul>
                <li>Understanding the Project</li>
                <li className="active_step">Engineering Solutions</li>
                <li>Final Presentation</li>
              </ul>
            </p>
          </div>
          <div className="casename_container">
            <h6>Case Study</h6>
            <h3>{title}</h3>
          </div>
        </nav>
        <NavContact />
      </div>
    </div>
  );
};

export default CaseNav;
