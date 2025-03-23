import RecommendedTitle from "./RecommendedTitle";

function Recommended({ data }) {
  return (
    <div className="p-5">
      <h1 className="text-xl mb-5">Recommended for you</h1>
      <div className="grid grid-cols-2 gap-5">
        {data
          ? data
              .filter((elements) => elements.isTrending === !true)
              .map((elements) => <RecommendedTitle field={elements} />)
          : null}
      </div>
    </div>
  );
}

export default Recommended;
