import React from "react";

function Project(props) {
    
  return (
    // <div>
    //   <img src={props.img} alt="Project" />
    //   <h3>{props.title}</h3>
    //   <p>Deployment Link: <a href={props.deployLink}>{props.deployLink}</a></p>
    //   <p>GitHub Link: <a href={props.gitLink}>{props.gitLink}</a></p>
    // </div>
<div className="card m-4" style={{width: '18rem'}}>
  <img src={props.img} className="card-img-top" width='300px' alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href={props.deployLink} className="btn btn-primary">Live App</a>
  </div>
</div>

  );
}

export default Project;
