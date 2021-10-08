const Discord = require('discord.js');
const Util = require("../Util/Util");
const NetworkUtil = require("../Util/NetworkUtil.js");
const Base = require("./Command.js");

class WhatsMyIp extends Base {
    constructor() {
        super("WhatsMyIp", "Tells you the IP of the DiscordBot Hoster", "fun");
    }

    async run(message, args) {
        const ips = NetworkUtil.getLocalIP();
        if (Util.isEmpty(ips)) return;
        var ipsFormatted = "";
        for (var i in Object.keys(ips)) {
            ipsFormatted += Object.keys(ips)[i] + " : " + Object.values(ips)[i] + "\n";
        }

        const embed = new Discord.MessageEmbed().setColor(0xAA55E0).setTimestamp().setFooter("GLATZ regiert!", this.client.user.avatarURL());
        embed.setTitle("👨‍💻IPS")
            .setDescription(ipsFormatted);

        message.channel.send({ embeds: [embed] });
    }
}

module.exports = WhatsMyIp;