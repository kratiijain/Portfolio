import React from "react";
import "./styles/Section.css";
import profile from "./assets/profile.jpg";
const Section = () => {
  return(
  <div className="sections">
    <div className="sections_container">
      <div className="section_img">
        <img src={profile} alt="" />
      </div>
      <div className="section_content">
        <h1>Kratika jain</h1>
        <p>Experience in frontend development</p>
        <p>Javascript development</p>
        <p>React native</p>
        <p>React js</p>
        <p>Next js</p>
      </div>
    </div>
  </div>
  )
};
export default Section;
