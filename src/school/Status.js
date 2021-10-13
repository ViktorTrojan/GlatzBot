const Week = require("./Timetable.js");
const Util = require("../Util/Util.js");

class Status {

    constructor(client) {
        this.client = client;
        this.week = new Week();
        this.date = new Date();
        this.run();

    }

    timeOutput() {
        this.client.user.setActivity(`It's ${this.date.getHours()}:${this.date.getMinutes()}!`, {
            type: "PLAYING"
        });
    }

    async weekend() {
        this.timeOutput();
        await Util.sleep(60 * 1000);
    }

    async run() {
        while (true) {
            await Util.sleep(60 * 1000 - (new Date().getSeconds() * 1000)); // to let it run at roughly 0 seconds
            this.date = new Date();

            if (this.date.getDay() == 0 || this.date.getDay() == 6) {
                await this.weekend();
                continue;
            }

            const day = this.week.days[this.date.getDay() - 1];
            var lesson = day.getLessonAtTime(this.date);
            if (lesson == undefined) {
                this.timeOutput();
            } else if (lesson == "break") {
                this.client.user.setActivity(`Break!`, {
                    type: "PLAYING"
                });

            } else {
                var d = new Date();
                d.setMinutes(lesson.endTime.getMinutes() - this.date.getMinutes());
                this.client.user.setActivity(`${lesson.subject} -> ${d.getMinutes()} Minutes Left!`, {
                    type: "PLAYING"
                });
            }
        }
    }
}

module.exports = Status;