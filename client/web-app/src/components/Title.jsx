function Title({ field }) {
  const rating = Math.round(field.vote_average);
  const date = new Date(field.release_date || field.first_air_date);
  const year = date.getFullYear();
  return (
    <div className="relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${field.backdrop_path}`}
        className="rounded-md mb-3"
      />

      <button className="rounded-full p-2 bg-[#10141E]/75 ml-auto absolute top-2 right-2">
        <img src={`/assets/icon-bookmark-empty.svg`} alt="bookmark icon" />
      </button>

      <div className="flex items-center gap-1 text-xs text-gray-300">
        <p>{year}</p>
        <span>&#8226;</span>
        <img
          src={`/assets/icon-category-${
            field.media_type === "Movie" ? "movie" : "tv"
          }.svg`}
        />
        <p>{field.media_type}</p>
        <span>&#8226;</span>
        <p>Rating {rating}</p>
      </div>

      <h1 className="font-bold text-sm">{field.title || field.name}</h1>
    </div>
  );
}

export default Title;
