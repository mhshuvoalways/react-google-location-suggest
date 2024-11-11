const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/autocomplete", async (req, res) => {
  try {
    const { apiKey, address } = req.body;
    if (apiKey) {
      const query = encodeURIComponent(address);
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}`
      );
      const result = await response.json();
      res.json(result);
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching autocomplete data" });
  }
});

app.post("/api/details", async (req, res) => {
  try {
    const { apiKey, placeId } = req.body;
    if (apiKey) {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
      );
      const result = await response.json();
      res.json(result);
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching details data" });
  }
});

app.post("*", async (req, res) => {
  res.json("react-google-place-suggest");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
