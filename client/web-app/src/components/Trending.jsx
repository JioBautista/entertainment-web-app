import TrendingTitle from "./TrendingTitle";

function Trending({ data }) {
  return (
    <div className="p-5">
      <h1 className="text-xl mb-5">Trending</h1>
      <div className="overflow-x-auto whitespace-nowrap space-x-5">
        {data
          ? data.results.map((elements) => (
              <>
                <TrendingTitle field={elements} />
              </>
            ))
          : null}
      </div>
    </div>
  );
}

export default Trending;
