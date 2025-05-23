require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on http://localhost:3000");
});
