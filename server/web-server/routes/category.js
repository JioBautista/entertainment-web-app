const express = require("express");
const cors = require("cors");
const router = express.Router();
require("dotenv").config();

router.get("/api/:category", cors(), async (req, res) => {
  const category = req.params.category;
  const url = `https://api.themoviedb.org/3/${category}/top_rated?language=en-US&page=1`;
  const options = {
    headers: {
      accept: `application/json`,
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    res.json(json.results);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
