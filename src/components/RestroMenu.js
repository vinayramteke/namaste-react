import { useState } from "react";
import { useParams } from "react-router";
import { MENUIMG_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestroMenu from "../utils/useRestroMenu";

const RestroMenu = () => {
  const { restroId } = useParams();

  const restroInfo = useRestroMenu(restroId); //customised hook to fetch menu data

  const [openIndex, setOpenIndex] = useState(null); //toggle state

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
          const isOpen = openIndex === index;

          return (
            <div key={index} className="r-menu">
              <h2>{title}</h2>
              {/* toggle button to hide and unhide menuItems */}
              <button onClick={() => setOpenIndex(isOpen ? null : index)}>
                {isOpen ? "<" : ">"}
              </button>

              {isOpen && (
                <div>
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
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestroMenu;
