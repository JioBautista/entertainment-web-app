function TrendingTitle({ field }) {
  const img_src = field.thumbnail.trending.small;
  const new_src = img_src.replace("./assets/", "/assets/");

  console.log(new_src);
  return (
    <div
      className={`p-3 inline-block rounded-md w-[240px] h-[140px] md:w-[470px] md:h-[230px] bg-contain bg-no-repeat`}
      style={{ backgroundImage: `url(${new_src})` }}
    >
      <button className="rounded-full p-2 bg-[#10141E]/75 ml-auto block">
        <img src="/assets/icon-bookmark-empty.svg" alt="bookmark icon" />
      </button>

      <div className="flex items-center gap-1 mt-8 text-sm text-gray-300">
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
      <h1 className="font-bold text-md">{field.title}</h1>
    </div>
  );
}

export default TrendingTitle;
