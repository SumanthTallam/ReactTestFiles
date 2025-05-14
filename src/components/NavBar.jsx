import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';



const NavBar=()=>{
    return (
        <>
      
          <nav className="bg-dark navbar-dark">
         <Link to="/">Home</Link>
        <Link to="/veg">veg</Link>
        <Link to="/meat">NonVeg</Link>
        
     </nav>
 
        
        </>
    )
}
export default NavBar