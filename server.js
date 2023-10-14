const express = require("express");
const path = require("path");
const PORT = 3080;
const app = express();

// Define middleware here
app.use(express.json({ limit: "50mb" }));
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.use(express.static(path.join(__dirname, "/files")));
    require('dotenv').config();
    console.log("env success");
};

require("./routes/api.js")(app);
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/client/build/index.html")));

//Listen to port
app.listen(PORT, () => console.log(`🌎 ==> Server now on port ${PORT}!`));