"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const JSONC = __importStar(require("jsonc-parser"));
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const file = __importStar(require("./file"));
function notifyGame(type, data, config) {
    if (data === "Terminate batch job (Y/N)?") {
        return;
    }
    // Read the existing "save#.dat" file
    const saveDatPath = path_1.default.join(config.modTargetPath, "..", constants_1.WATCHER_MOD_NAME, `save${config.saveSlot}.dat`);
    let saveDat;
    if (file.exists(saveDatPath)) {
        const saveDatRaw = file.read(saveDatPath);
        try {
            saveDat = JSONC.parse(saveDatRaw);
        }
        catch (err) {
            console.error(`Failed to parse "${chalk_1.default.green(saveDatPath)}":`, err);
            process.exit(1);
        }
    }
    else {
        saveDat = [];
    }
    if (!Array.isArray(saveDat)) {
        saveDat = [];
    }
    // Add the new message
    if (type === "command") {
        saveDat.push({
            type,
            data,
        });
        console.log(`Successfully compiled "${constants_1.PROJECT_NAME}".`);
    }
    else if (type === "msg") {
        const newData = data.replace(/\r\n/g, "\n"); // Replace Windows newlines with Unix newlines
        for (const line of newData.split("\n")) {
            saveDat.push({
                type,
                data: line,
            });
            console.log(data);
        }
    }
    // Write it back to the file
    const saveDatRaw = JSON.stringify(saveDat, null, 2);
    file.write(saveDatPath, saveDatRaw);
}
exports.default = notifyGame;
