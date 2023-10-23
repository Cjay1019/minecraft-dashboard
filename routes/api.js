require('dotenv').config();
const axios = require("axios");
const { exec } = require('child_process');

module.exports = function (app) {
    app.get("/api/getDetails", (req, res) => {
        axios.get(`https://api.mcstatus.io/v2/status/java/${process.env.SERVER_URL}`).then(response => {
            res.json(response.data);
        });
    });

    app.post("/api/restartServer", (req, res) => {
        const script = `echo ${process.env.SERVER_PW} | sudo -S systemctl restart minecraft.service`;
        exec(script, (err, stdout, stderr) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
            }
        });
    });
};