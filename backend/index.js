const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const predictRouter = require("./routes/predict");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/predict", predictRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
