import RestroCard from "./RestroCard";
import restroList from "../utils/restroData";
import { useState } from "react";

//step 2:building Body for my food app
const Body = () => {
  const [listOfRestro, setlistOfRestro] = useState(restroList);
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
            const filteredList = listOfRestro.filter(
              (restaurantes) => restaurantes.avgRating > 4
            );
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
