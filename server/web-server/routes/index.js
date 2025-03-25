const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res) => {
  function getRandomLetter(letters) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
  }
  const letters = ["a", "b", "c"];
  const randomLetter = getRandomLetter(letters);
  console.log(randomLetter);
  const url = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}s=b&y=2024&page=5`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    res.json(json);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
