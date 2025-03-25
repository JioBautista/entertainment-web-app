const express = require("express");
const cors = require("cors");
const router = express.Router();
require("dotenv").config();

router.get("/api/trending", cors(), async (req, res) => {
  const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;
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
    res.json(json);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
