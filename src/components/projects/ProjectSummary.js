import React from "react";

const projectSummary = ({ project }) => {
  const { title } = project;
  return (
    <div className="card z-depth-0 project-summary">
      <div className="car-content grey-text text-darken-3">
        <span className="card-title"> {title} </span>{" "}
        <p> Posted by the Belaifa El Hussein </p>{" "}
        <p className="grey-text"> 3 rd September, 2 AM </p>{" "}
      </div>{" "}
    </div>
  );
};

export default projectSummary;
