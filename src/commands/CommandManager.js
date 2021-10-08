const FileUtil = require("../Util/FileUtil");

class CommandManager {
    constructor(client) {
        this.client = client;
        this.defaultPath = "./src/commands/";
        this.initCommands();
    }

    initCommands() {

        console.log("---------------- Command INIT ----------------");

        var files = FileUtil.getFilesInDir(this.defaultPath, "js");
        files.forEach((file) => {
            if (file == "CommandManager.js" || file == "Command.js") return;

            const command = new(require("./" + file));
            this.client.commands.set(command.getName().toLowerCase(), command);
            console.log(`Loaded Command ${command.getName()}`);
        });

        console.log("---------------- Command INIT ----------------");
    }
}

module.exports = CommandManager;