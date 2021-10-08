const { prefix } = require('../config.json');

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}`);

    client.user.setActivity(`"${prefix}help" for help`, {
        type: "PLAYING"
    });
};