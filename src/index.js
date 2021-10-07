const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] })
const config = require("../config.json")

client.on("ready", async() => {
    console.log("The client is ready!")
})

client.login(config.token)