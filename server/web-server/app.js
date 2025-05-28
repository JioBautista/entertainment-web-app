const express = require("express");
const app = express();
const port = 3000;
const categoryRoute = require("./routes/category");

app.use("/", categoryRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
