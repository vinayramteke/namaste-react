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
    <div className="r-container max-w-225 my-8 mx-auto p-4 text-[#1f2937] ">
      {/* Restaurant Name */}
      <div className="r-name ">
        <h1 className="text-center text-[2.2rem] font-bold mb-4 text-[#111827] shadow:[0_2px_6px_rgba(0, 0, 0, 0.08)]">
          {name}
        </h1>
      </div>

      {/* Restaurant Details */}
      <div className="r-details flex flex-wrap justify-between rounded-xl bg-[#f9fafb]  py-4 px-8 gap-5 mb-8">
        <h2 className="text-4 font-semibold text-[#374151] m-0">
          {avgRatingString} Stars
        </h2>
        <h2 className="text-4 font-semibold text-[#374151] m-0">
          {totalRatings} Ratings
        </h2>
        <h2 className="text-4 font-semibold text-[#374151] m-0">
          {costForTwoMessage}
        </h2>
        <h2 className="text-4 font-semibold text-[#374151] m-0">
          {cuisines.join(", ")}
        </h2>
        <h2 className="text-4 font-semibold text-[#374151] m-0">
          {sla.slaString}
        </h2>
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
