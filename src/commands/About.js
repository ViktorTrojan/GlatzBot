const Base = require("./Command.js");
const Discord = require('discord.js');
const Util = require("../Util/Util.js");

class About extends Base {
    constructor() {
        super("About", "Information about the Bot", "misc");
    }

    async run(message, args) {
        if (!message.guild) return;

        const embed = Util.getEmbed(this.client);
        embed.setTitle("💻 About")
            .setThumbnail(this.client.user.avatarURL())
            .setDescription("ReschberryFinder was developed to run on the Raspberry Pi 4. Main Feature is to show the Local-IP of the Pi in the Network")
            .addField("Credits", `©ViktorTrojan`, false)
        message.channel.send({ embeds: [embed] });
    }
}

module.exports = About;