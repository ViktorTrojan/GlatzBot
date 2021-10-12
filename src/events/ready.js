const { prefix } = require("../config.json");
const Status = require("../school/Status.js");

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}`);

    const status = new Status(client);
};