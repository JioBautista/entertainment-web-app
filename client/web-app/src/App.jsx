import { useSearchParams } from "react-router";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Category from "./components/Category";

function App() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const isBookmarked = searchParams.get("isBookMarked");
  return (
    <div className="container mx-auto pb-5 md:grid md:grid-cols-10 md:py-8">
      <Navbar />
      <div className="md:col-span-9">
        <Searchbar />
        <div className="p-5">
          {category ? (
            <h1 className="text-xl mb-5">{category}</h1>
          ) : isBookmarked ? null : (
            <h1 className="text-xl mb-5">Trending</h1>
          )}
          <Category />
        </div>
      </div>
    </div>
  );
}

export default App;
