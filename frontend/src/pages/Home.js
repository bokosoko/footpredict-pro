import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box sx={{ m: 4, textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>FootPredict Pro</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Predict football matches using AI and data science.<br />
        Fast, accurate, and easy to use!
      </Typography>
      <Button component={Link} to="/predict" variant="contained" size="large">
        Predict a Match
      </Button>
    </Box>
  );
}

export default Home;
