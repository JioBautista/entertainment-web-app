const express = require("express");
const app = express();
const port = 3000;
const trendingRoute = require("./routes/trending");
const popularRoute = require("./routes/popular");

app.use("/", trendingRoute);
app.use("/", popularRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
