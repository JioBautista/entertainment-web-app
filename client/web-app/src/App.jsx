import { useSearchParams } from "react-router";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Trending from "./components/Trending";
import data from "./data/data.json";

function App() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("category");
  const filteredData = filter
    ? data.filter((element) => element.category === filter)
    : data;
  return (
    <div className="container mx-auto">
      <Navbar />
      <Searchbar />
      <Trending data={data} />
    </div>
  );
}

export default App;
