require('dotenv').config();
const axios = require("axios");

module.exports = function (app) {
    app.get("/api/getDetails", (req, res) => {
        axios.get(`https://api.mcstatus.io/v2/status/java/${process.env.SERVER_URL}`).then(response => {
            res.json(response.data);
        });
    });
};