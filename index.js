
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("SpeedType Arena Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
