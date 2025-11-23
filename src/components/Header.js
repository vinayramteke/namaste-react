import { LOGO_URL } from "../utils/constants";

///step 1: Build Header of my Food App
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src={LOGO_URL}></img>
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li className="nav-link">Home</li>
          <li className="nav-link">About Us</li>
          <li className="nav-link">Contact Us</li>
          <li className="nav-btn">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
