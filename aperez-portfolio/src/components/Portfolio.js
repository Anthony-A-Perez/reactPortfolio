function Portfolio(props) {
    return (
      <div>
        {/* Portfolio content */}
        <h1>Portfolio</h1>
  
        {/* Render child components */}
        {props.children}
      </div>
    );
  }
 
export default Portfolio;