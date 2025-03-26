import TrendingTitle from "./TrendingTitle";
import { useQuery } from "@tanstack/react-query";

function Trending() {
  const { data } = useQuery({
    queryKey: ["trending"],
    queryFn: () =>
      fetch("http://localhost:3000/api/trending").then((res) => res.json()),
    staleTime: 600000,
  });
  return (
    <div className="p-5">
      <h1 className="text-xl mb-5">Trending</h1>
      <div className="overflow-x-auto whitespace-nowrap space-x-5">
        {data?.results.map((elements) => (
          <TrendingTitle field={elements} />
        ))}
      </div>
    </div>
  );
}

export default Trending;
