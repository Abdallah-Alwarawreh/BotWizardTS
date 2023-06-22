import { CommandInteractionOptionResolver } from "discord.js";
import { Event } from "../Structures/Event";
import { client } from "../app";
import { ExtendedInteraction } from "../typings/Command";

export default new Event("messageCreate", async (message) => {
    if(message.author.bot) return;

    console.log(message.content);
});