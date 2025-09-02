import React, { useState } from "react";
import { Typography, Button, TextField, CircularProgress, Alert, Box } from "@mui/material";
import axios from "axios";

// Use your hosted backend API here (production):
const API_URL = "https://your-backend-api-url.com/api/predict"; // <-- UPDATE THIS

function Predict() {
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePredict = async () => {
    setError("");
    setResult("");
    setLoading(true);
    try {
      const response = await axios.post(API_URL, { teamA, teamB });
      setResult(response.data.prediction);
    } catch (err) {
      setError(err.response?.data?.error || "Prediction failed. Try again.");
    }
    setLoading(false);
  };

  return (
    <Box sx={{ m: 4, maxWidth: 400, mx: "auto" }}>
      <Typography variant="h5" gutterBottom>Match Prediction</Typography>
      <TextField
        label="Team A"
        value={teamA}
        onChange={(e) => setTeamA(e.target.value)}
        sx={{ mb: 2, mr: 1 }}
        fullWidth
      />
      <TextField
        label="Team B"
        value={teamB}
        onChange={(e) => setTeamB(e.target.value)}
        sx={{ mb: 2 }}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={handlePredict}
        disabled={loading || !teamA || !teamB}
        fullWidth
      >
        {loading ? <CircularProgress size={20} /> : "Predict"}
      </Button>
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      {result && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Prediction: <b>{result}</b>
        </Alert>
      )}
    </Box>
  );
}

export default Predict;
