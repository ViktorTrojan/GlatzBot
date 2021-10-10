const Discord = require("discord.js");
const NetworkUtil = require("../Util/NetworkUtil.js");
const Base = require("./Command.js");
const Util = require("../Util/Util.js");

class WhatsMyIp extends Base {
    constructor() {
        super("WhatsMyIp", "Tells you the IP of the DiscordBot Hoster", "misc");
    }

    async run(message, args) {
        const ips = NetworkUtil.getLocalIP();
        if (ips == undefined) return;
        var ipsFormatted = "";
        for (var i in Object.keys(ips)) {
            ipsFormatted += Object.keys(ips)[i] + ": " + Object.values(ips)[i] + "\n";
        }

        const embed = Util.getEmbed(this.client);
        embed.setTitle("👨‍💻 Local-IPS")
            .setDescription(ipsFormatted);

        message.channel.send({ embeds: [embed] });
    }
}

module.exports = WhatsMyIp;