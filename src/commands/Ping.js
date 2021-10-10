const Base = require("./Command.js");
const Discord = require('discord.js');
const Util = require("../Util/Util.js");

class Ping extends Base {
    constructor() {
        super("Ping", "🏓Ping🏓Pong", "fun");
    }

    async run(message, args) {
        if (!message.guild) return;

        const embed = Util.getEmbed(this.client);

        var msg = await message.channel.send("Pinging...");
        embed.setTitle("🏓 Pong!")
            .addField("Bot Latency", `${msg.createdTimestamp - message.createdTimestamp}ms`, true)
            .addField("API Latency", `${Math.round(this.client.ws.ping)}ms`, true)
        msg.edit({ embeds: [embed] });
    }
}

module.exports = Ping;