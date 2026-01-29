import RestroCard, { withVegLabel } from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestroList from "../utils/useRestroList";
import SearchBar from "./SearchBar";

const RestroCardVeg = withVegLabel(RestroCard);

const Body = () => {
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  const listOfRestro = useRestroList();

  useEffect(() => {
    setFilteredRestro(listOfRestro);
  }, [listOfRestro]);

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearchBtn = () => {
    const searchedResto = listOfRestro.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    if (searchedResto.length === 0) {
      alert("No restaurants found");
      return;
    }
    setFilteredRestro(searchedResto);
  };

  const handleFilter = () => {
    const filteredList = listOfRestro.filter((res) => res?.info?.avgRating > 4);
    setFilteredRestro(filteredList);
  };

  //Using Shimmer to load fake card for better UX also called Conditional Rendring.
  if (listOfRestro.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="page-container my-0 mx-auto mb-8 p-8-4 max-w-300">
      {/* search and filter box */}
      <SearchBar
        searchText={searchText}
        handleFilter={handleFilter}
        handleSearchBtn={handleSearchBtn}
        handleSearchText={handleSearchText}
      />

      {/*To run a loop */}
      <div className="restro-container flex flex-wrap gap-6 justify-center z-10 ">
        {filteredRestro.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {restaurant.info.veg ? (
              <RestroCardVeg restroInfo={restaurant} />
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
