#!/usr/bin/env node
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
const child_process_1 = require("child_process");
const figlet_1 = __importDefault(require("figlet"));
const JSONC = __importStar(require("jsonc-parser"));
const path_1 = __importDefault(require("path"));
const update_notifier_1 = __importDefault(require("update-notifier"));
const package_json_1 = __importDefault(require("../package.json"));
const checkForConfig_1 = __importDefault(require("./checkForConfig"));
const checkForTemplateFiles_1 = __importDefault(require("./checkForTemplateFiles"));
const checkForWindowsTerminalBugs_1 = __importDefault(require("./checkForWindowsTerminalBugs"));
const configFile = __importStar(require("./configFile"));
const constants_1 = require("./constants");
const copyWatcherMod_1 = __importDefault(require("./copyWatcherMod"));
const file = __importStar(require("./file"));
const notifyGame_1 = __importDefault(require("./notifyGame"));
async function main() {
    // ASCII banner
    console.log(chalk_1.default.green(figlet_1.default.textSync("IsaacScript")));
    // Validate the platform
    if (process.platform !== "win32") {
        console.error(`IsaacScript is only supported on ${chalk_1.default.green("Windows")}.`);
        console.error("If you use another operating system and you want to use IsaacScript, contact Zamiel and let him know.");
        process.exit(1);
    }
    // Check for a new version
    update_notifier_1.default({ pkg: package_json_1.default }).notify();
    // Do some pre-flight checks
    await checkForWindowsTerminalBugs_1.default();
    await checkForConfig_1.default();
    checkForTemplateFiles_1.default();
    const config = configFile.read();
    copyWatcherMod_1.default(config);
    // Subprocess #1 - The mod directory syncer
    spawnModDirectorySyncer(config);
    // Subprocess #2 - tstl --watch (to automatically convert TypeScript to Lua)
    spawnTSTLWatcher(config);
    // Read the "tsconfig.json" file
    const tsConfigInclude = getTSConfigInclude();
    const resolvedIncludePath = path_1.default.resolve(constants_1.CWD, tsConfigInclude);
    console.log("Automatically monitoring the following for changes:");
    console.log(`1) your TypeScript code:     ${chalk_1.default.green(resolvedIncludePath)}`);
    console.log(`2) the source mod directory: ${chalk_1.default.green(constants_1.MOD_SOURCE_PATH)}`);
    console.log("");
}
function spawnModDirectorySyncer(config) {
    const modDirectorySyncerPath = path_1.default.join(__dirname, "modDirectorySyncer");
    const childProcess = child_process_1.fork(modDirectorySyncerPath, [
        constants_1.MOD_SOURCE_PATH,
        config.modTargetPath,
    ]);
    childProcess.on("message", (msg) => {
        notifyGame_1.default("msg", msg, config);
    });
}
function spawnTSTLWatcher(config) {
    const ls = child_process_1.spawn("npx", ["tstl", "--watch", "--preserveWatchOutput"], {
        shell: true,
    });
    ls.stdout.on("data", (data) => {
        const msg = data.toString().trim();
        if (msg.includes("Starting compilation in watch mode...")) {
            const newMsg = "IsaacScript is now watching for changes.";
            notifyGame_1.default("msg", newMsg, config);
        }
        else if (msg.includes("File change detected. Starting incremental compilation...")) {
            const newMsg = "TypeScript change detected. Compiling...";
            notifyGame_1.default("msg", newMsg, config);
        }
        else if (msg.includes("Found 0 errors. Watching for file changes.")) {
            notifyGame_1.default("command", `luamod ${constants_1.PROJECT_NAME}`, config);
        }
        else {
            notifyGame_1.default("msg", msg, config);
        }
    });
    ls.stderr.on("data", (data) => {
        const msg = data.toString().trim();
        if (msg === "^C") {
            return;
        }
        console.error("Error:", msg);
        notifyGame_1.default("msg", `Error: ${msg}`, config);
    });
    ls.on("close", (code) => {
        console.error("tstl exited abruptly with code:", code);
        process.exit(1);
    });
}
function getTSConfigInclude() {
    const tsConfigRaw = file.read(constants_1.TSCONFIG_PATH);
    let tsConfig;
    try {
        tsConfig = JSONC.parse(tsConfigRaw);
    }
    catch (err) {
        console.error(`Failed to parse "${chalk_1.default.green(constants_1.TSCONFIG_PATH)}":`, err);
        process.exit(1);
    }
    if (!Object.prototype.hasOwnProperty.call(tsConfig, "include")) {
        console.error(`Your "${chalk_1.default.green(constants_1.TSCONFIG_PATH)}" file does not have an include directive, which is surely a mistake. Delete the file and re-run isaacscript.`);
        process.exit(1);
    }
    if (tsConfig.include.length === 0) {
        console.error(`Your "${chalk_1.default.green(constants_1.TSCONFIG_PATH)}" file has an empty include directive, which is surely a mistake. Delete the file and re-run isaacscript.`);
        process.exit(1);
    }
    return tsConfig.include[0];
}
main().catch((err) => {
    console.error("IsaacScript failed:", err);
    process.exit(1);
});
