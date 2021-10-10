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
            .setDescription("GlatzBot was developed to run on the Raspberry Pi 4. Main Feature is to show the Local-IP of the Pi because it can be quite a tedious task to find out")
            .addField("Credits", `©RequestFX#1541, GLATZ`, false)
        message.channel.send({ embeds: [embed] });
    }
}

module.exports = About;