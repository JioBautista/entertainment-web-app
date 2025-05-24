const express = require("express");
const app = express();
const port = 3000;
const trendingRoute = require("./routes/trending");
const categoryRoute = require("./routes/category");

app.use("/", trendingRoute);
app.use("/", categoryRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
