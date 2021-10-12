class Lesson {
    constructor(subject, teacher, time, duration = 50) {
        this.subject = subject;
        this.teacher = teacher;
        this.duration = duration;

        this.startTime = new Date();
        let t = this.convertTime(time);
        this.startTime.setHours(t[0], t[1], 0, 0);
        this.endTime = new Date();
        this.endTime.setHours(t[0], t[1] + this.duration, 0, 0);
    }

    convertTime(time) {
        const split = time.split(":");
        let hour = parseInt(split[0]);
        let minute = parseInt(split[1]);
        return [hour, minute];
    }
}

class Day {
    constructor() {
        this.initLessons();
    }

    getLessonAtTime(date) {
        if (date.getTime() < this.lessons[0].startTime.getTime() || date.getTime() > this.lessons[this.lessons.length - 1].endTime.getTime()) return;

        for (let lesson of this.lessons) {
            if (date.getTime() >= lesson.startTime.getTime() && date.getTime() <= lesson.endTime.getTime()) return lesson;
        }

        return "break";
    }
}

module.exports = { Lesson, Day };