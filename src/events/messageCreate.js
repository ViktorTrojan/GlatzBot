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

    cmd.setClient(client)
    cmd.run(message, args, CMD_NAME);
};