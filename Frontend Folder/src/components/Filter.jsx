import React from "react";

const Filter = ({ setSearch, setSort }) => {
  return (
    <div className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center gap-4 sticky top-0 z-50">
      <input
        type="text"
        placeholder="Search food..."
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded-lg w-full md:w-1/3"
      />
      <select
        onChange={(e) => setSort(e.target.value)}
        className="border p-2 rounded-lg w-full md:w-1/4"
      >
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="star">Star Rating</option>
        <option value="cost">Cost</option>
        <option value="distance">Distance</option>
      </select>
    </div>
  );
};

export default Filter;