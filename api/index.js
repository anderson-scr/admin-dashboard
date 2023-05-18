const express = require("express");
const cors = require("cors");
const path = require("path");

require("./db/connect");
require("dotenv").config();

// Configs
const app = express();
app.use(cors());
const port = process.env.API_PORT || 3003;

// Config parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, () => console.log(`Server listening on port: http://localhost:${port}`));

// Import route index
app.use(require("./routes/_routesIndex"));

app.use(express.static(path.join(__dirname, "public")));