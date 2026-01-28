import { useState } from "react";
import { useParams } from "react-router";

import Shimmer from "./Shimmer";
import useRestroMenu from "../utils/useRestroMenu";
import RestroHeader from "./RestroHeader";
import MenuCategory from "./MenuCategory";

const RestroMenu = () => {
  const { restroId } = useParams();
  const restroInfo = useRestroMenu(restroId);
  const [openIndex, setOpenIndex] = useState(0); // Default open first category like Swiggy

  if (restroInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    totalRatings,
    avgRatingString,
    costForTwoMessage,
    sla,
    areaName,
  } = restroInfo?.cards[2]?.card?.card?.info;

  const categories =
    restroInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c.card?.card?.itemCards,
    ) || [];

  return (
    <div className="r-container max-w-[800px] mx-auto min-h-screen font-sans text-gray-700 pb-20">
      {/* --- Restaurant Header Section --- */}

      <RestroHeader
        name={name}
        cuisines={cuisines}
        totalRatings={totalRatings}
        avgRatingString={avgRatingString}
        costForTwoMessage={costForTwoMessage}
        sla={sla}
        areaName={areaName}
      />
      <div className="text-center my-6">
        <span className="text-xs text-gray-400 tracking-widest uppercase">
          M E N U
        </span>
      </div>

      {/* --- Menu Categories --- */}
      <div className="r-menu-container bg-gray-100">
        {categories.map((category, index) => {
          const isOpen = openIndex === index;
          const onToggle = () => {
            setOpenIndex(isOpen ? null : index);
          };

          return (
            <MenuCategory
              key={index}
              category={category}
              isOpen={isOpen}
              onToggle={onToggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestroMenu;
