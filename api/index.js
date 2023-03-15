const express = require("express");
const cors = require("cors");
const path = require("path");
const dbConn = require("./db/connect");
require("dotenv").config();

// Configs
const app = express();
app.use(cors());
const port = process.env.API_PORT || 3003;

// Global save for the root path
global.__basedir = __dirname;

// When i'm at work and can't connect to any DB
global.__atWork = true;

// Config parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {  // error handler for malformed request body
        return res.status(400).send({ success: false, msg: err.message, body: err.body.replaceAll('\r', ' ').replaceAll('\n', ' ').replaceAll('\"', '\'')});
    }
    next();
});

app.listen(port, () => console.log(`Server listening on port: http://localhost:${port}`));

// Import route index
app.use(require("./routes/routesIndex"));

app.use(express.static(path.join(__dirname, "public")));