import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import Title from "./Title";

function Category() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const { data } = useQuery({
    queryKey: ["top-rated", category],
    queryFn: () =>
      fetch(`http://localhost:3000/api/${category}`).then((res) => res.json()),
    staleTime: 600000,
  });
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {data?.map((elements) => (
          <Title field={elements} />
        ))}
      </div>
    </div>
  );
}

export default Category;
