import React from "react";

function MenuItem({ title, desc, image }) {
  return (
    <div className="projectItem">
      <div className="text">
        <h1> {title} </h1>
        <p> {desc} </p>
      </div>
      <div id="pImg" style={{ backgroundImage: `url(${image})` }}></div>
    </div>  
  );
}

export default MenuItem;
