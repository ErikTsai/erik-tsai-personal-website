import React from "react";
import "../styles/About.css";
import profilePicture from "../assets/gorillaSquare.jpg";

function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <img src={profilePicture} className="aboutImg" alt="Me" />
        <div className="aboutText">
          <h1 className="header"> {`Hi! I'm Erik :)`}</h1>
          <p className="par">  
            I'm currently in my first year of studying Computer Engineering at the University of Waterloo. I enjoy singing and reading, and am an aspiring software engineer. Nice to meet you!
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default About;
