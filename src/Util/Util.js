const Discord = require("discord.js");

class Util {
    constructor(client) {
        this.sleepList = new(require("enmap"));
    }

    addSleepUser(user) {
        this.sleepList.set(user, Date.now());
    }

    isUserInList(userTag) {
        const removeSleepList = [];
        let flag = false;
        this.sleepList.forEach((time, user) => {
            if (Date.now() - time > (1000 * 6)) {
                removeSleepList.push(user);
                return;
            }

            if (userTag == user) flag = true;
        });

        for (let i in removeSleepList) {
            this.sleepList.delete(removeSleepList[i]);
        }

        return flag;
    }

    static getEmbed(client) {
        return new Discord.MessageEmbed()
            .setColor(0xAA55E0)
            .setTimestamp()
            .setFooter("Glatz regiert!", client.user.avatarURL());
    }

    static isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
}

module.exports = Util;