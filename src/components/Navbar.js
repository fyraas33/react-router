import "../App.css";


import { Link } from "react-router-dom";



function Navbar() {
    return (
        <div>
        <nav className="navbar">
           <ul>
            <div>
                <img src="logo.png" alt="logo"  height="100"/>
            </div>
        <li><Link to="/" >HOME</Link></li>
        <li> <Link to="/movies">MOVIES</Link></li>
       
      </ul>
        </nav>
        </div>
       
        
                );
}
export default Navbar 