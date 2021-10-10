const { prefix } = require('../config.json');

module.exports = (client, message) => {
    if (message.author.bot)
        return;

    if (!message.content.startsWith(prefix))
        return;

    const [CMD_NAME, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);

    cmd = client.commands.get(CMD_NAME.toLowerCase())
    if (!cmd)
        return;

    if (client.util.isUserInList(message.author.tag)) {
        message.channel.send(`${message.author.toString()} Please don't spam!`);
        return;
    }

    client.util.addSleepUser(message.author.tag);


    cmd.setClient(client)
    cmd.run(message, args, CMD_NAME);
};