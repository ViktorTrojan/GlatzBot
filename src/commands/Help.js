const Base = require("./Command.js");
const Util = require("../Util/Util.js");

class Help extends Base {
    constructor() {
        super("Help", "Shows all commands", "misc");
    }

    async run(message, args) {
        if (!message.guild) return;

        let fun = "",
            misc = "";

        this.client.commands.forEach(command => {
            switch (command.getCategory()) {

                case "fun":
                    fun += `\`${command.getName()}\` `;
                    break;
                case "misc":
                    misc += `\`${command.getName()}\` `;
                    break;
            }
        });

        const embed = Util.getEmbed(this.client);
        embed.setTitle("🔨 Help")

        .addField("Misc", misc, false)
            .addField("Fun", fun, false)
        message.channel.send({ embeds: [embed] });
    }
}

module.exports = Help;