//step 0: Import whatever u will going to use
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo-img"
          src="https://s.tmimgcdn.com/scr/1200x627/346100/food-creative-logo-template_346101-original.jpg"
        ></img>
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

const AppBody = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

//step 2: where you whant to render
const root = ReactDOM.createRoot(document.getElementById("root"));

//step 3: render
root.render(<AppBody />);
