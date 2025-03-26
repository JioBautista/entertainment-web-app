import { useQuery } from "@tanstack/react-query";
import RecommendedTitle from "./RecommendedTitle";

function Recommended() {
  const { data } = useQuery({
    queryKey: ["popular"],
    queryFn: () =>
      fetch("http://localhost:3000/api/popular").then((res) => res.json()),
    staleTime: 600000,
  });
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {data?.map((elements) => (
          <RecommendedTitle field={elements} />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
