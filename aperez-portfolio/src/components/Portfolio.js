import React from "react";
import Project from "./Project";

function Portfolio() {
  const projectData = [
    {
      img: require("./images/note_taker.png"),
      title: "Note Taker App",
      deployLink: "https://ap-note-taker.herokuapp.com/",
      gitLink: "https://github.com/Anthony-A-Perez/noteTaker",
    },
    {
      img: require("./images/tech-blog.png"),
      title: "Tech Blog App",
      deployLink: "https://tech-blog-ap.herokuapp.com/dashboard",
      gitLink: "https://github.com/Anthony-A-Perez/techBlog",
    },
    {
      img: require("./images/weather-dashboard.png"),
      title: "Weather App",
      deployLink: "https://anthony-a-perez.github.io/Weather-Dashboard/",
      gitLink: "https://github.com/Anthony-A-Perez/Weather-Dashboard",
    },
    {
      img: require("./images/workday-scheduler.png"),
      title: "Work Day Scheduler",
      deployLink: "https://anthony-a-perez.github.io/Work-Day-Scheduler/",
      gitLink: "https://github.com/Anthony-A-Perez/Work-Day-Scheduler",
    },
    {
      img: require("./images/nametag.png"),
      title: "Nametag Generator",
      deployLink: "https://anthony-a-perez.github.io/nametag/",
      gitLink: "https://github.com/Anthony-A-Perez/nametag",
    },
    {
      img: require("./images/prework_study_guide.png"),
      title: "Project 2",
      deployLink: "https://anthony-a-perez.github.io/prework-study-guide/",
      gitLink: "https://github.com/Anthony-A-Perez/prework-study-guide",
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="d-flex justify-content-between flex-row">
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
