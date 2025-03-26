import React from "react";
import "./styles/Main.css";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import profile from "./assets/profile.jpg";
const Main = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_content">
          <div className="text">
            <p>Hello Everyone !</p>
            <h1>I am Kratika</h1>
            <p>Front-end Developer &Designer</p>
            <div className="icons">
              <Twitter className="icon" />
              <Instagram className="icon" />
              <Facebook className="icon" />
              <LinkedIn className="icon" />
            </div>
            <div className="buttons">
              <button>See Me</button>
              <button>Hire me</button>
            </div>
          </div>
        </div>
        <div className="main_img">
          <img src={profile} alt=" " />
        </div>
      </div>
    </div>
  );
};
export default Main;
