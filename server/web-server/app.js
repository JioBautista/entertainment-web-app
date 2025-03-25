const express = require("express");
const app = express();
const port = 3000;
const indexRoute = require("./routes/index");

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.use("/", indexRoute);
