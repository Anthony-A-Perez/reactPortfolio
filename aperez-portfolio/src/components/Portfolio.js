

import React from "react";
import Project from "./Project";

function Portfolio() {
  const projectData = [
    {
      img: require("./images/note_taker.png"),
      title: "Note Taker App",
      deployLink: "https://https://ap-note-taker.herokuapp.com/",
      gitLink: "https://github.com/project1",
    },
    {
      img: "project2.jpg",
      title: "Project 2",
      deployLink: "https://example.com/project2",
      gitLink: "https://github.com/project2",
    },
    {
      img: "project2.jpg",
      title: "Project 2",
      deployLink: "https://example.com/project2",
      gitLink: "https://github.com/project2",
    },
    {
      img: "project2.jpg",
      title: "Project 2",
      deployLink: "https://example.com/project2",
      gitLink: "https://github.com/project2",
    },
    {
      img: "project2.jpg",
      title: "Project 2",
      deployLink: "https://example.com/project2",
      gitLink: "https://github.com/project2",
    },
    {
      img: "project2.jpg",
      title: "Project 2",
      deployLink: "https://example.com/project2",
      gitLink: "https://github.com/project2",
    },
    // Add more project objects as needed
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className='d-flex justify-content-between flex-row'>
           {projectData.map((project, index) => (
        <Project
          key={index}
          img={project.img}
          title={project.title}
          deployLink={project.deployLink}
          gitLink={project.gitLink}
        />
      ))}
      </div>
   
    </div>
  );
}

export default Portfolio;
