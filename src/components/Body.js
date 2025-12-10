import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//step 2:building Body for my food app
const Body = () => {
  //creating react state varible using react hook useState=>maintain state of varible and sink UI
  const [listOfRestro, setlistOfRestro] = useState([]);

  // creating api call using react hook useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // api call to fetch real data
  const fetchData = async () => {
    const data = await fetch("https://api.npoint.io/eaa947b5059e46c7d650");
    const json = await data.json();
    setlistOfRestro(json.restaurants);
  };

  //Using Shimmer to load fake card for better UX also called Conditional Rendring.
  if (listOfRestro.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="app-body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants..."
        />
        <button className="search-btn">Search</button>
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listOfRestro.filter((res) => res.rating > 4);
            setlistOfRestro(filteredList);
          }}
        >
          Most Rated Restaurant
        </button>
      </div>
      <div className="filter-container"></div>
      <div className="restro-container">
        {listOfRestro.map((restaurant) => (
          <RestroCard key={restaurant.id} restroInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
