const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
// const dbConn = require("./db/connect");
require("dotenv").config();

// Configs
const app = express();
app.use(cors());
const port = process.env.PORT || 3003;

// Global save for the root path
global.__basedir = __dirname;

// Configures the database and opens a global connection that can be used in any module with `mongoose.connection`
// dbConn.connect();
// dbConn.onConnection();

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))

app.use(morgan("common"));

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
// app.use(require('./routes/routesIndex'));

app.use(express.static(path.join(__dirname, "public")));