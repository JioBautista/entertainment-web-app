import { useSearchParams } from "react-router";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Trending from "./components/Trending";
import Recommended from "./components/Recommended";
import data from "./data/data.json";

function App() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("category");
  const isBookmarked = searchParams.get("isBookMarked");
  const filteredData =
    filter || isBookmarked
      ? data.filter(
          (element) =>
            element.category === filter ||
            element.isBookmarked === JSON.parse(isBookmarked)
        )
      : data;
  return (
    <div className="container mx-auto pb-5 md:grid md:grid-cols-10 md:py-8">
      <Navbar />

      <div className="md:col-span-9">
        <Searchbar />
        {filter || isBookmarked ? null : <Trending data={data} />}
        <div className="p-5">
          {filter ? (
            <h1 className="text-xl mb-5">{filter}</h1>
          ) : isBookmarked ? null : (
            <h1 className="text-xl mb-5">Recommended for you</h1>
          )}
          <Recommended data={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default App;
