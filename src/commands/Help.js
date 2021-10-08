const Base = require("./Command.js");

class Help extends Base {
    constructor() {
        super("Help", "Shows all commands", "misc");
    }

    async run(message, args) {
        if (!message.guild) return;

        var str = "";

        this.client.commands.forEach(command => {
            str += `${command.getName()} : ${command.getDescription()}\n`;
        });

        message.channel.send(str);
    }
}

module.exports = Help;