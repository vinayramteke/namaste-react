import { CDN_URL } from "../utils/constants";

//step3: Build restro cards
const RestroCard = (props) => {
  //restructure of props so that props.restroName not need to be used and this only javascript not react
  const { restroInfo } = props;

  //for my api call
  // const { image, name, cuisines, rating, deliveryTime, price } =
  //   restroInfo || {};

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    restroInfo?.info || {};
  return (
    <div
      className="restro-card 
    z-10
    transition-all
    duration-200
    ease-out
    hover:-translate-y-1
    hover:shadow-lg w-[250px] bg-white  rounded-xl p-3 shadow-md cursor-pointer "
    >
      <div className="restro-img-container w-full h-40 overflow-hidden rounded-lg mb-3">
        <img
          className="restro-img w-full h-full object-cover"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <div className="restro-info ">
        <h3 className="text-1.1 font-bold mt-0 mr-0 mb-2 ml-0 text-[#1f2937] whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </h3>
        <h4 className="cuisines text-0.85 mt-0 mr-0 mb-3 ml-0 font-normal whitespace-nowrap overflow-hidden text-ellipsis">
          {cuisines.join(",")}
        </h4>
        <div className="restro-meta flex justify-between items-center text-0.8 font-semibold mb-2">
          <span className="rating bg-[#22c55e] text-white py-[2px] px-[6px] rounded-sm">
            ★ {avgRating}
          </span>
          <span className="delivery-time text-[#374151]">
            {sla.deliveryTime} mins
          </span>
        </div>
        <h4 className="cost m-0 text-0.8 text-[#374151]">{costForTwo}</h4>
      </div>
    </div>
  );
};

//Higher Oder Component
//input - RestroCard
//Outpur - RestroCard with Prmoted label

export const withVegLabel = (RestroCard) => {
  return (props) => {
    return (
      <div className="prmoted-container relative">
        <label className="absolute w-6 h-6 ml-3 mt-3  bg-white z-10">
          <img src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"></img>
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
