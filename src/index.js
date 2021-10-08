const Discord = require("discord.js");
const CommandManager = require("./commands/CommandManager");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] })
const config = require("./config.json")
const EventManager = require("./events/EventManager.js");

client.commands = new(require("enmap"));

const eventManager = new EventManager(client);
const commandManager = new CommandManager(client);

client.login(config.token)

process.on("unhandledRejection", (error) => {
    console.error("Unhandled promise rejection:", error);
});