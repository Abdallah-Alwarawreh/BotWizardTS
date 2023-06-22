import { ApplicationCommandDataResolvable } from "discord.js";

export interface RegisterCommandsOptions {
    GuildID?: string;
    Commands?: ApplicationCommandDataResolvable[];
}