const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./src/database/connections");
const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("crud app");
});

app.use(morgan("tiny"));
connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
