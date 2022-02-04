"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({
    intents: [
        1 /* Guilds */,
        2 /* GuildMembers */,
        512 /* GuildMessages */,
    ],
});
client.on("ready", () => {
    console.log("ready");
});
client.on("messageCreate", (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    try {
        console.log("who", (_a = message.member) === null || _a === void 0 ? void 0 : _a.displayName);
        (_b = message.member) === null || _b === void 0 ? void 0 : _b.roles.cache.some((role) => {
            console.log("role", role.name);
            return role.name === "Slowmode";
        });
        const hasPermission = (_d = (_c = message.guild) === null || _c === void 0 ? void 0 : _c.me) === null || _d === void 0 ? void 0 : _d.permissions.has("MODERATE_MEMBERS");
        console.log("permission", hasPermission);
        yield ((_e = message.member) === null || _e === void 0 ? void 0 : _e.timeout(10000, "hey"));
    }
    catch (error) {
        console.error(error);
    }
}));
client.login("OTM4OTgzNDI4MDA1NzExOTAy.YfyOdg.svsUoN70V32EMlwPTwp0oapovmc");
