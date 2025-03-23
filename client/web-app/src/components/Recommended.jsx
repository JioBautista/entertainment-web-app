import RecommendedTitle from "./RecommendedTitle";

function Recommended({ data }) {
  return (
    <div>
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
