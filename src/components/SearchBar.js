const SearchBar = ({
  searchText,
  handleSearchText,
  handleSearchBtn,
  handleFilter,
}) => {
  return (
    <div className="search-filter-container flex flex-wrap gap-4 justify-center items-center mb-10 mt-10 ">
      {/* search input box */}
      <input
        type="text"
        className="search-input rounded-full py-3 px-4 w-full max-w-100 border border-solid outline-none border-[#e5e7eb] focus:shadow-[0_0_3px_rgba(249,115,22,0.2)] focus:border-[#f97313] transition-shadow-12"
        placeholder="Search for restaurants..."
        value={searchText}
        onChange={handleSearchText}
      />

      {/* search button */}
      <button
        className="search-btn py-3 px-6 bg-[#f97316] rounded-full text-white border-none shadow-[0_0_3px_rgba(249,115,22,0.2)] hover:bg-[#ea580c] cursor-pointer"
        onClick={handleSearchBtn}
      >
        Search
      </button>
      {/* Top Restro Filter Button */}
      <button
        className="filter-button border border-solid py-3 px-6 border-[#e5e7eb] rounded-full shadow-[0_0_3px_rgba(249,115,22,0.2)] hover:border-[#f97313] "
        onClick={handleFilter}
      >
        Top Rated (4.0+)
      </button>
    </div>
  );
};
export default SearchBar;
