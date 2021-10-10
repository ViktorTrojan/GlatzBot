const { networkInterfaces } = require("os");
const Util = require("./Util");

class NetworkUtil {
    static getLocalIP() {
        const nets = networkInterfaces();
        const results = {};

        for (const name of Object.keys(nets)) {
            for (const net of nets[name]) {
                // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
                if (net.family === "IPv4" && !net.internal) {
                    if (!results[name]) {
                        results[name] = [];
                    }
                    results[name].push(net.address);
                }
            }
        }
        if (Util.isEmpty(results)) return undefined;
        return results;
    }
}


module.exports = NetworkUtil;