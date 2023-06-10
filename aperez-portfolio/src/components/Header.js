
const Header = () => {
  const avatar = require("./images/avatar.jpg")
  return ( 

<div class="container-fluid text-center bg-warning-subtle">
  <div class="row bg-pink">
    <div class="col">
      <h1>A Perez</h1>
    </div>
    <div class="col">
      <img src={avatar} className="img-thumbnail" width='100px'alt="avatar" />
    
    </div>
    </div>
    </div>


    
        

     
   );
}
 
export default Header;


