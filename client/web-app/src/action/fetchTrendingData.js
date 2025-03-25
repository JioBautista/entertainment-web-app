export default function fetchTrendingData() {
  fetch("http://localhost:3000/api/trending")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(`Problem with fetching ${error}`);
    });
}
