import { GatewayIntentBits } from "discord-api-types";
import { Client } from "discord.js";
import config from "./config.json";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on("ready", () => {
  console.log("ready");
});

client.on("messageCreate", async (message) => {
  try {
    const hasRole = message.member?.roles.cache.some((role) => {
      return role.name.toLowerCase() === config.role.toLowerCase();
    });

    if (!hasRole) return;

    await message.member?.timeout(config.timeoutSeconds * 1000);
  } catch (error) {
    console.error(error);
  }
});

client.login(config.token);
