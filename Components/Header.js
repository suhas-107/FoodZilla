import { useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import FoodFireLogo from "../Images/Food Fire Logo.png";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="w-[100px]"
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
    <div className="flex justify-between bg-emerald-600">
      <Title />
      <div className="flex justify-center m-7 p-2">
        <ul className="flex items-center justify-between space-x-4 font-semibold text-center">

         <li > 
          Online Status:{onlinestatus ? "✅" :"🔴" }
         </li>
         <Link to="/">
          <li className="hover:underline">Home</li>
          </Link>
          <Link to="/about"><li className="hover:underline">About</li></Link>
          
         <Link to="/contact"> 
         
         <li className="hover:underline">Contact</li>
         
         
         </Link>
        <Link to="/grocery">
         <li className="hover:underline">
          Grocery
         </li>
         </Link>
          <li className="hover:underline">
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="bg-blue-700 hover:bg-blue-500 text-amber-400 font-extrabold py-2 px-4 rounded-full"
                onClick={() => setIsLoggedin(false)}
              >
                Logout 🔓
              </button>
            ) : (
              <button className="bg-blue-700 hover:bg-blue-500 text-amber-400 font-extrabold py-2 px-4 rounded-full" onClick={() => setIsLoggedin(true)}>
                Login 🔒
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;