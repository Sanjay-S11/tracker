const express = require("express");

const router = express.Router();

router.post("/save", (req, res) => {
  res.json({
    message: "Data saved successfully"
  });
});

module.exports = router;