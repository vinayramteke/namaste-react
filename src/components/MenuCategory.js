import MenuItem from "./MenuItem";

const MenuCategory = ({ category, isOpen, onToggle }) => {
  const { title, itemCards } = category.card.card;
  return (
    <div className="r-menu bg-white border-b-[16px] border-gray-100 last:border-b-0">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center p-6 cursor-pointer bg-white"
        onClick={onToggle}
      >
        <h2 className="font-extrabold text-lg text-gray-800">
          {title} ({itemCards.length})
        </h2>
        <span
          className={`transform transition-transform duration-300 text-lg ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <div className="px-4">
          {itemCards.map((item) => {
            const info = item?.card?.info;
            return <MenuItem key={info?.id} info={info} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
