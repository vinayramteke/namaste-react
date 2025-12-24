import RestroCard, { withPrmotedLabel } from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestroCard from "../utils/useRestroCard";

//step 2:building Body for my food app
const Body = () => {
  //creating react state varible using react hook useState=>maintain state of varible and sink UI
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  //higher order component
  const RestroCardPromoted = withPrmotedLabel(RestroCard);

  console.log("Body Comp", listOfRestro);

  // creating api call using react hook useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // api call to fetch real data
  const fetchData = async () => {
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
    <div className="page-container my-0 mx-auto mb-8 p-8-4 max-w-300">
      {/* search and filter box */}
      <div className="search-filter-container flex flex-wrap gap-4 justify-center items-center mb-10 mt-10 ">
        {/* search input box */}
        <input
          type="text"
          className="search-input rounded-full py-3 px-4 w-full max-w-100 border border-solid outline-none border-[#e5e7eb] focus:shadow-[0_0_3px_rgba(249,115,22,0.2)] focus:border-[#f97313] transition-shadow-12"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        {/* search button */}
        <button
          className="search-btn py-3 px-6 bg-[#f97316] rounded-full text-white border-none shadow-[0_0_3px_rgba(249,115,22,0.2)] hover:bg-[#ea580c] cursor-pointer"
          onClick={() => {
            console.log("bC");
            //Search funcationality Code
            const searchedResto = listOfRestro.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
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
          className="filter-button border border-solid py-3 px-6 border-[#e5e7eb] rounded-full shadow-[0_0_3px_rgba(249,115,22,0.2)] hover:border-[#f97313] "
          onClick={() => {
            const filteredList = listOfRestro.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilteredRestro(filteredList);
          }}
        >
          Top Rated (4.0+)
        </button>
      </div>
      {/*To run a loop */}
      <div className="restro-container flex flex-wrap gap-6 justify-center  ">
        {filteredRestro.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {restaurant.info.isOpen ? (
              <RestroCardPromoted restroInfo={restaurant} />
            ) : (
              <RestroCard restroInfo={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
