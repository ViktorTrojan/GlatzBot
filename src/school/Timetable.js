const { Lesson, Day } = require("./Day.js");

class Week {
    constructor() {
        this.days = [];
        this.initDays();
    }

    initDays() {
        this.days.push(new Monday());
        this.days.push(new Tuesday());
        this.days.push(new Wednesday());
        this.days.push(new Thursday());
        this.days.push(new Friday());
    }

    getMonday() {
        return this.days[0];
    }

    getTuesDay() {
        return this.days[1];
    }

    getWednesDay() {
        return this.days[2];
    }

    getThursDay() {
        return this.days[3];
    }

    getFriDay() {
        return this.days[4];
    }
}

class Monday extends Day {
    initLessons() {
        this.lessons = [
            new Lesson("AM", "SCHI", "8:15"),
            new Lesson("D", "MESA", "10:05"),
            new Lesson("D", "MESA", "11:00"),
            new Lesson("SYT", "POLZ", "11:55"),
            new Lesson("GGP", "BAUE", "12:50")
        ]
    }
}

class Tuesday extends Day {
    initLessons() {
        this.lessons = [
            new Lesson("NW2", "PULE", "8:15"),
            new Lesson("NW2", "PULE", "9:10"),
            new Lesson("MEDT", "SACH", "10:05"),
            new Lesson("MEDT", "SACH", "11:00"),
            new Lesson("SEW", "GLAZ", "12:50"),
            new Lesson("SEW", "GLAZ", "13:45"),
            new Lesson("SEW", "GLAZ", "14:40"),
            new Lesson("ITP2", "KRST", "15:35"),
            new Lesson("ITP2", "KRST", "16:25")
        ]
    }
}

class Wednesday extends Day {
    initLessons() {
        this.lessons = [
            new Lesson("AM", "SCHI", "8:15"),
            new Lesson("AM", "SCHI", "9:10"),
            new Lesson("NWT1", "ANGE", "10:05"),
            new Lesson("NWT1", "ANGE", "11:00"),
            new Lesson("GGP", "WASA", "11:55"),
            new Lesson("SYT", "POLZ", "13:45"),
            new Lesson("SYT", "GLAZ", "14:40"),
            new Lesson("SYT", "GLAZ", "15:35"),
            new Lesson("SYT", "GLAZ", "16:25")
        ]
    }
}

class Thursday extends Day {
    initLessons() {
        this.lessons = [
            new Lesson("INSY", "LOIB", "10:05"),
            new Lesson("INSY", "LOIB", "11:00"),
            new Lesson("INSY", "LOIB", "11:55"),
            new Lesson("ITP2", "GLAZ", "12:50"),
            new Lesson("ITP2", "GLAZ", "13:45")
        ]
    }
}

class Friday extends Day {
    initLessons() {
        this.lessons = [
            new Lesson("E1", "WUBA", "9:10"),
            new Lesson("E1", "WUBA", "10:05"),
            new Lesson("ITP2", "GLAZ", "11:00"),
            new Lesson("NWT1", "ANGE", "11:55"),
            new Lesson("NWT1", "ANGE", "12:50"),
            new Lesson("BSPK", "BRAU", "13:45"),
            new Lesson("BSPK", "BRAU", "14:40")
        ]
    }
}

module.exports = Week;