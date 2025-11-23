//step 0: Import whatever u will going to use
import React from "react";
import ReactDOM from "react-dom/client";
///step 1: Build Header of my Food App
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

const RestroCard = () => {
  return (
    <div className="restro-card">
      <div className="restro-img-container">
        <img
          className="restro-img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/04fb67f176cf4ff4614a3319c2a00bec"
        ></img>
      </div>
      <div className="restro-info">
        <h3>Meghna Foods</h3>
        <h4 className="cuisines">Rolls, Chinese, Snacks, Burgers</h4>
        <div className="restro-meta">
          <span className="rating">★ 4.3</span>
          <span className="delivery-time">24 mins</span>
        </div>
        <h4 className="cost">₹400 FOR TWO</h4>
      </div>
    </div>
  );
};

//step 2:building Body for my food app
const Body = () => {
  return (
    <div className="app-body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants..."
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restro-container">
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
      </div>
    </div>
  );
};

//step 0: Build Body of my Food App
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

//step 0: where you whant to render
const root = ReactDOM.createRoot(document.getElementById("root"));

//step 0: render
root.render(<AppLayout />);
