import TrendingTitle from "./TrendingTitle";

function Trending({ data }) {
  const trending_data = data
    ? data.filter((element) => element.isTrending === true)
    : null;

  return (
    <div className="p-5">
      <h1 className="text-xl mb-5">Trending</h1>
      <div className="overflow-x-auto whitespace-nowrap space-x-5">
        {trending_data.map((elements) => (
          <>
            <TrendingTitle field={elements} />
          </>
        ))}
      </div>
    </div>
  );
}

export default Trending;
