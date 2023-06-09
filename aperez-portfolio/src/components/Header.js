



function Header(props) {
    return (
      <div>
        {/* Header content */}
        <h1>Header</h1>
  
        {/* Render child components */}
        {props.children}
      </div>
    );
  }
 
export default Header;