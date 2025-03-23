import { useSearchParams } from "react-router";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Trending from "./components/Trending";
import Recommended from "./components/Recommended";
import data from "./data/data.json";

function App() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("category");
  const filteredData = filter
    ? data.filter((element) => element.category === filter)
    : data;
  return (
    <div className="container mx-auto pb-5">
      <Navbar />
      <Searchbar />
      {filter ? null : <Trending data={data} />}

      <div className="p-5">
        {filter ? (
          <h1 className="text-xl mb-5">{filter}</h1>
        ) : (
          <h1 className="text-xl mb-5">Recommended for you</h1>
        )}
        <Recommended data={filteredData} />
      </div>
    </div>
  );
}

export default App;
