const Discord = require("discord.js");
const CommandManager = require("./commands/CommandManager");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] })
const config = require("./config.json")
const EventManager = require("./events/EventManager.js");

async function init() {
    client.commands = new(require("enmap"));
    const eventManager = new EventManager(client);
    const commandManager = new CommandManager(client);
    await client.login(config.token);
    client.util = new(require("./Util/Util"))(client);
}

init();

process.on("unhandledRejection", (error) => {
    console.error("Unhandled promise rejection:", error);
});