const axios = require("axios");

module.exports = function (app) {
    app.post("/api/getDetails", (req, res) => {
        axios.get("https://api.mcstatus.io/v2/status/java/connerleigh.com").then(response => {
            res.json(response.data);
        });
    });
};