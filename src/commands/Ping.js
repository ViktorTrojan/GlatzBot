const Base = require("./Command.js");
const Discord = require('discord.js');

class Ping extends Base {
    constructor() {
        super("Ping", "🏓Ping🏓Pong", "fun");
    }

    async run(message, args) {
        if (!message.guild) return;

        const embed = new Discord.MessageEmbed().setColor(0xAA55E0).setTimestamp().setFooter("GLATZ regiert!", this.client.user.avatarURL());

        var msg = await message.channel.send("Pinging...");
        embed.setTitle("🏓 Pong!")
            .addField("Bot Latency", `${msg.createdTimestamp - message.createdTimestamp}ms`, true)
            .addField("API Latency", `${Math.round(this.client.ws.ping)}ms`, true)
        msg.edit({ embeds: [embed] });
    }
}

module.exports = Ping;