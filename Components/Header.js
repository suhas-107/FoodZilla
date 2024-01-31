import { useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import FoodFireLogo from "../Images/Food Fire Logo.png";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={FoodFireLogo}
      alt="Food Fire Logo"
      title="Food Fire"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);

  const onlinestatus=useOnlineStatus();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>

         <li> 
          Online Status:{onlinestatus ? "✅" :"🔴" }
         </li>
         <Link to="/">
          <li>Home</li>
          </Link>
          <Link to="/about"><li style={{padding:10}}>About</li></Link>
          
         <Link to="/contact"> 
         
         <li>Contact</li>
         
         
         </Link>
        <Link to="/grocery">
         <li>
          Grocery
         </li>
         </Link>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;