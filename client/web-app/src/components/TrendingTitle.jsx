function TrendingTitle({ field }) {
  const rating = Math.round(field.vote_average);
  const date = new Date(field.release_date || field.first_air_date);
  const year = date.getFullYear();
  return (
    <div
      className={`p-3 inline-block rounded-md w-[240px] h-[140px] md:w-[470px] md:h-[230px] bg-cover bg-no-repeat bg-center`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${field.backdrop_path})`,
      }}
    >
      <button className="rounded-full p-2 bg-[#10141E]/75 ml-auto block cursor-pointer">
        <img src="/assets/icon-bookmark-empty.svg" alt="bookmark icon" />
      </button>

      <div className="flex items-center gap-1 mt-8 text-sm text-gray-300 md:mt-28 md:text-lg">
        <p>{year}</p>
        <span>&#8226;</span>
        <img
          src={`/assets/icon-category-${
            field.media_type === "movie" ? "movie" : "tv"
          }.svg`}
        />
        <p>{field.media_type}</p>
        <span>&#8226;</span>
        <p>Rating {rating}</p>
      </div>

      <h1 className="font-bold text-md md:text-xl">
        {field.title || field.name}
      </h1>
    </div>
  );
}

export default TrendingTitle;
