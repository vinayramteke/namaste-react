import RestroCard from "./RestroCard";
import restroList from "../utils/restroData";

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
        {restroList.map((restaurant) => (
          <RestroCard key={restaurant.info.id} restroInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
