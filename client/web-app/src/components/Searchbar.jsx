import React from "react";

function Searchbar() {
  return (
    <div className="p-5">
      <div className="flex items-center gap-5">
        <img src="/src/assets/icon-search.svg" alt="Search icon" />
        <input
          placeholder="Search for movies or TV series"
          className="grow p-2 outline-none"
        />
      </div>
    </div>
  );
}

export default Searchbar;
