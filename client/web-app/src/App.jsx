import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Trending from "./components/Trending";
import Recommended from "./components/Recommended";
import fake_data from "./data/data.json";
import fetchTrendingData from "./action/fetchTrendingData";

function App() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("category");
  const isBookmarked = searchParams.get("isBookMarked");
  const filteredData =
    filter || isBookmarked
      ? fake_data.filter(
          (element) =>
            element.category === filter ||
            element.isBookmarked === JSON.parse(isBookmarked)
        )
      : fake_data;

  const { data, error } = useQuery({
    queryKey: ["trending"],
  });
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
