const express = require("express");
const cors = require("cors");
const router = express.Router();
require("dotenv").config();

router.get("/api/:category", cors(), async (req, res) => {
  const category = req.params.category;
  const categories = `https://api.themoviedb.org/3/${category}/top_rated?language=en-US&page=1`;
  const trending = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;

  const options = {
    headers: {
      accept: `application/json`,
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  };
  try {
    const response = await fetch(
      category === null ? categories : trending,
      options
    );
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
