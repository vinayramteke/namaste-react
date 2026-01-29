import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div
      className="header-container py-4 px-8 flex justify-between items-center top-0 sticky z-50
       bg-[#ffffff] shadow-[0_4px_6px_-1px_rgba(0, 0, 0, 0.1) "
    >
      <div className="logo-container w-15 cursor-pointer block ">
        <img
          className="logo-img w-full aspect-square object-cover rounded-full"
          src={LOGO_URL}
        ></img>
      </div>

      {/* Do not use <a></a> tag to link pages as it reload whole body of webApp use{" "}
      <Link></Link> provide by react-router as it only refrsh component which
      get updated */}

      <div className="nav-container  ">
        <ul className="nav-items flex  cursor-pointer  items-center gap-8 m-0 p-0 font-semibold text-[#4b5563] ">
          <li className="nav-link hover:text-[#f97316]">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link hover:text-[#f97316]">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-link hover:text-[#f97316]">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-btn ">Cart</li>
          <li
            className="login-btn "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
