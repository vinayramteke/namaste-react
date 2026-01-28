import { MENUIMG_URL } from "../utils/constants.js";
const MenuItem = ({ info }) => {
  return (
    <div className="menu-item flex justify-between items-center py-8 border-b border-gray-200 last:border-none gap-4">
      {/* --- Left: Text Info --- */}
      <div className="flex-1 pr-4">
        {/* Veg/Non-Veg Icon Placeholder */}
        <div className="mb-1">
          {/* Assuming veg/non-veg data might exist in 'itemAttribute', otherwise default to a simple icon */}
          {info?.itemAttribute?.vegClassifier === "VEG" ? (
            <img
              src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
              className="w-4 h-4"
              alt="veg"
            />
          ) : (
            <img
              src="https://img.icons8.com/color/48/non-vegetarian-food-symbol.png"
              className="w-4 h-4"
              alt="non-veg"
            />
          )}
        </div>

        <h3 className="font-bold text-gray-800 text-base md:text-lg mb-1">
          {info?.name}
        </h3>
        <p className="font-medium text-gray-800 text-sm mb-3">
          ₹{(info?.price || info?.defaultPrice) / 100}
        </p>
        <p className="text-xs text-gray-500 leading-5 line-clamp-2 md:line-clamp-none">
          {info?.description}
        </p>
      </div>

      {/* --- Right: Image & Button --- */}
      <div className="menu-img-container relative w-[118px] h-[96px] flex-shrink-0">
        {info?.imageId ? (
          <img
            className="menu-img w-full h-full object-cover rounded-xl"
            src={MENUIMG_URL + info.imageId}
            alt={info?.name}
          />
        ) : (
          <div className="w-full h-full bg-gray-100 rounded-xl"></div>
        )}

        {/* The "ADD" Button - Floating */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[80%]">
          <button className="w-full bg-white text-green-600 font-extrabold text-sm py-2 px-4 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 uppercase">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
