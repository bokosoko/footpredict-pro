const express = require("express");
const router = express.Router();

// Simple example prediction endpoint (can be replaced by ML call)
router.post("/", async (req, res) => {
  const { teamA, teamB } = req.body;
  if (!teamA || !teamB) return res.status(400).json({ error: "Team names required" });
  try {
    // Dummy logic
    const prediction = teamA === teamB ? "Draw" : `${teamA} wins`;
    res.json({ prediction });
  } catch (err) {
    res.status(500).json({ error: "Prediction failed" });
  }
});

module.exports = router;
