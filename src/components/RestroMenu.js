import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";
import { MENUIMG_URL } from "../utils/constants";

const RestroMenu = () => {
  const [restroInfo, setRestroInfo] = useState(null);
  const { restroId } = useParams();
  console.log(restroId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const data = await fetch("https://api.npoint.io/54a1d363bc20cf0156f9");
    const data = await fetch(MENU_URL + restroId);
    const json = await data.json();
    setRestroInfo(json?.data);
  };

  if (restroInfo === null) {
    return <Shimmer />;
  }

  // Basic restaurant info
  const {
    name,
    cuisines,
    totalRatings,
    avgRatingString,
    costForTwoMessage,
    sla,
  } = restroInfo?.cards[2]?.card?.card?.info;

  // Extract menu categories that contain itemCards
  const categories =
    restroInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c.card?.card?.itemCards
    ) || [];

  return (
    <div className="r-container">
      {/* Restaurant Name */}
      <div className="r-name">
        <h1>{name}</h1>
      </div>

      {/* Restaurant Details */}
      <div className="r-details">
        <h2>{avgRatingString} Stars</h2>
        <h2>{totalRatings} Ratings</h2>
        <h2>{costForTwoMessage}</h2>
        <h2>{cuisines.join(", ")}</h2>
        <h2>{sla.slaString}</h2>
      </div>

      {/* Deals Section
      <div className="r-deals">
        <h1>Deals for you</h1>
      </div> */}

      {/* Restaurant Menu */}
      <div className="r-menu-container">
        <h1>Menu</h1>

        {categories.map((category, index) => {
          const { title, itemCards } = category.card.card;

          return (
            <div key={index} className="r-menu">
              <h2>{title}</h2>

              {itemCards.map((item) => {
                const info = item.card.info;
                return (
                  <div key={info.id} className="menu-item">
                    <h3>{info.name}</h3>

                    <p>₹{(info.price || info.defaultPrice) / 100}</p>

                    <p>{info.description}</p>
                    <div className="menu-img-container">
                      <img
                        className="menu-img"
                        src={MENUIMG_URL + info.imageId}
                        alt={info.name}
                      ></img>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestroMenu;
