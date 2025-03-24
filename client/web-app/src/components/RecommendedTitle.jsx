import React from "react";

function RecommendedTitle({ field }) {
  const img_src = field.thumbnail.regular.large;
  const new_src = img_src.replace("./assets/", "/assets/");
  return (
    <div className="relative">
      <img src={`${new_src}`} className="rounded-md mb-3" />

      <button className="rounded-full p-2 bg-[#10141E]/75 ml-auto absolute top-2 right-2">
        <img
          src={`/assets/icon-bookmark-${
            field.isBookmarked === true ? "full" : "empty"
          }.svg`}
          alt="bookmark icon"
        />
      </button>

      <div className="flex items-center gap-1 text-xs text-gray-300">
        <p>{field.year}</p>
        <span>&#8226;</span>
        <img
          src={`/assets/icon-category-${
            field.category === "Movie" ? "movie" : "tv"
          }.svg`}
        />
        <p>{field.category}</p>
        <span>&#8226;</span>
        <p>{field.rating}</p>
      </div>

      <h1 className="font-bold text-sm">{field.title}</h1>
    </div>
  );
}

export default RecommendedTitle;
