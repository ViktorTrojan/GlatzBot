class Command {
    constructor(name, description, category) {
        this.name = name;
        this.description = description;
        this.category = category;

        this.client;
    }

    setClient(client) {
        this.client = client;
    }

    getName() {
        return this.name;
    }

    getUsage() {
        return this.usage;
    }

    getDescription() {
        return this.description;
    }

    getCategory() {
        return this.category;
    }
}

module.exports = Command;