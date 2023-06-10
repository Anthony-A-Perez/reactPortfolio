import React from "react";

function Project(props) {
  return (
    // <div>
    //   <img src={props.img} alt="Project" />
    //   <h3>{props.title}</h3>
    //   <p>Deployment Link: <a href={props.deployLink}>{props.deployLink}</a></p>
    //   <p>GitHub Link: <a href={props.gitLink}>{props.gitLink}</a></p>
    // </div>
    <div className="card m-4" style={{ width: "18rem" }}>
      <img src={props.img} className="card-img-top" width="300px" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
<div className="container-md">
  <a
          href={props.deployLink}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Deployment
        </a>

        <a
          href={props.gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Github Repository
        </a>
</div>
        
      </div>
    </div>
  );
}

export default Project;
