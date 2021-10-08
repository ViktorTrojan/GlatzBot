const fs = require("fs");

class FileUtil {
    static getFilesInDir(dir, extension) {
        var files = fs.readdirSync(dir);
        if (extension == undefined) return files;

        var extensionFiles = [];
        for (var i in files) {
            var ext = files[i].split(".")[1];
            if (ext == "js") extensionFiles.push(files[i]);
        }
        return extensionFiles;
    }
}

module.exports = FileUtil;