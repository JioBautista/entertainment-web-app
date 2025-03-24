import { useSearchParams } from "react-router";

function Searchbar() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("category");
  const isBookMarked = searchParams.get("isBookMarked");
  return (
    <div className="p-5">
      <div className="flex items-center gap-5">
        <img src="/assets/icon-search.svg" alt="Search icon" />
        <div className="grow">
          <form>
            <input
              placeholder={`Search for ${
                filter
                  ? filter
                  : isBookMarked
                  ? "bookmarked shows"
                  : "movies or TV series"
              }`}
              className="w-full p-2 outline-none"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
