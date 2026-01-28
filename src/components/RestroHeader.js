const RestroHeader = ({
  name,
  cuisines,
  totalRatings,
  avgRatingString,
  costForTwoMessage,
  sla,
  areaName,
}) => {
  return (
    <div className="r-details pt-8 px-4 mb-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            {name}
          </h1>
          <p className="text-xs text-gray-500">{cuisines?.join(", ")}</p>
          <p className="text-xs text-gray-500">
            {areaName}, {sla?.lastMileTravelString}
          </p>
        </div>

        {/* Rating Box */}
        <div className="border border-gray-200 rounded-lg p-2 text-center shadow-[0_1px_5px_rgba(0,0,0,0.05)] min-w-[60px]">
          <div className="flex items-center justify-center gap-1 text-green-700 font-bold border-b border-gray-200 pb-1 mb-1">
            <span className="text-lg">★</span>
            <span className="text-sm">{avgRatingString}</span>
          </div>
          <div className="text-[10px] font-semibold text-gray-500 tracking-tighter">
            {totalRatings}
          </div>
        </div>
      </div>

      {/* Time and Cost Info */}
      <div className="bg-gray-100 rounded-b-2xl p-3 flex gap-4 items-center uppercase text-sm font-bold text-gray-700">
        <div className="flex items-center gap-2">
          <span>{sla?.slaString}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{costForTwoMessage}</span>
        </div>
      </div>
    </div>
  );
};
export default RestroHeader;
