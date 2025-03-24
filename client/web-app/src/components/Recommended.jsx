import RecommendedTitle from "./RecommendedTitle";

function Recommended({ data }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
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
