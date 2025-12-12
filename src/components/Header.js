import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

///step 1: Build Header of my Food App
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src={LOGO_URL}></img>
      </div>
      {/* Do not use <a></a> tag to link pages as it reload whole body of webApp use{" "}
      <Link></Link> provide by react-router as it only refrsh component which
      get updated */}
      <div className="nav-container">
        <ul className="nav-items">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/About">About Us</Link>
          </li>
          <li className="nav-link">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="nav-btn">Card</li>
          <li
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
