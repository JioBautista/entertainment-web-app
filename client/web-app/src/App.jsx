import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto bg-red-500 p-10 mt-10 rounded-md space-y-5">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <button
          className="bg-blue-500 p-5 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          {count}
        </button>
      </div>
    </>
  );
}

export default App;
