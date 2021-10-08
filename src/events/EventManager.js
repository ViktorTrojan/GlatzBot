const FileUtil = require("../Util/FileUtil");

class EventManager {
    constructor(client) {
        this.client = client;
        this.defaultPath = "./src/events/";
        this.initEvents();
    }

    initEvents() {

        console.log("----------------- Event INIT -----------------");

        var files = FileUtil.getFilesInDir(this.defaultPath, "js");
        files.forEach((file) => {
            if (file == "EventManager.js") return;

            const event = require("./" + file);
            const eventName = file.split(".")[0]; // get the filename without ext
            this.client.on(eventName, event.bind(null, this.client));
            console.log(`Loaded Event ${eventName}`);
        });

        console.log("----------------- Event INIT -----------------");
    }
}

module.exports = EventManager;