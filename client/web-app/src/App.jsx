import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Trending from "./components/Trending";
import Recommended from "./components/Recommended";

function App() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("category");
  const isBookmarked = searchParams.get("isBookMarked");

  const { data, error } = useQuery({
    queryKey: ["trending"],
    queryFn: () =>
      fetch("http://localhost:3000/api/trending").then((res) => res.json()),
  });

  console.log(data);
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
          {/* <Recommended data={filteredData} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
