function TrendingTitle({ field }) {
  const img_src = field.thumbnail.trending.small;
  const new_src = img_src.replace("./assets/", "/src/assets/");
  return (
    <div
      className={`p-5 bg-no-repeat bg-cover inline-block rounded-md`}
      style={{ backgroundImage: `url(${new_src})` }}
    >
      <button className="rounded-full p-2">
        <img src="/src/assets/icon-bookmark-empty.svg" alt="bookmark icon" />
      </button>
      <div className="flex items-center gap-3">
        <p>{field.year}</p>
        <p>{field.category}</p>
        <p>{field.rating}</p>
      </div>
      <h1>{field.title}</h1>
    </div>
  );
}

export default TrendingTitle;
