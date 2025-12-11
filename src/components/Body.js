import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//step 2:building Body for my food app
const Body = () => {
  //creating react state varible using react hook useState=>maintain state of varible and sink UI
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Comp");

  // creating api call using react hook useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // api call to fetch real data
  const fetchData = async () => {
    //for api call of api created by me

    // const data = await fetch("https://api.npoint.io/eaa947b5059e46c7d650");
    // const json = await data.json();
    // setListOfRestro(json.restaurants);
    // setFilteredRestro(json.restaurants);

    //swigy api path
    //data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.68660&lng=76.52180&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestro(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log("bC");
            //Search funcationality Code
            const searchedResto = listOfRestro.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            if (searchedResto.length === 0) {
              alert("No restaurants found");
              return;
            }
            console.log(searchedResto);
            setFilteredRestro(searchedResto);
          }}
        >
          Search
        </button>
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listOfRestro.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilteredRestro(filteredList);
          }}
        >
          Most Rated Restaurant
        </button>
      </div>
      <div className="filter-container"></div>
      {/*To run a loop */}
      <div className="restro-container">
        {filteredRestro.map((restaurant) => (
          <RestroCard key={restaurant?.info?.id} restroInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
