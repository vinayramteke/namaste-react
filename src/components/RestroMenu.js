import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestroMenu = () => {
  const [restroInfo, setRestroInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("https://api.npoint.io/54a1d363bc20cf0156f9");
    const json = await data.json();
    setRestroInfo(json?.data);
  };
  if (restroInfo === null) {
    return <Shimmer />;
  }
  //for Restro Name and Basic Details
  const {
    name,
    cuisines,
    totalRatings,
    avgRatingString,
    costForTwoMessage,
    sla,
  } = restroInfo?.cards[2]?.card?.card?.info;

  //for restro Menu
  const { title, itemCards } =
    restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  // console.log(itemCards[0].card.info.name);
  return (
    <div className="r-container">
      <div className="r-name">
        <h1>{name}</h1>
      </div>
      <div className="r-details">
        <h2>{avgRatingString}</h2>
        <h2>{totalRatings}</h2>
        <h2>{costForTwoMessage}</h2>
        <h2>{cuisines.join(", ")}</h2>
        <h2>{sla.slaString}</h2>
      </div>
      <div className="r-deals">
        <h1>Deals for you</h1>
      </div>
      <div className="r-menu-container">
        <h1>Menu</h1>
        <h2>{title}</h2>
        <div className="r-menu">
          <h2>{itemCards[0]?.card?.info?.name}</h2>
          <h3>{itemCards[0]?.card?.info?.price}</h3>
          <p>{itemCards[0]?.card?.info?.description}</p>
        </div>
      </div>
    </div>
  );
};
export default RestroMenu;
