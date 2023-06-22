import { Command } from "../../Structures/Command";

export default new Command({
    name: "ping",
    description: "reply with pong",
    run: async( {interaction} ) => {
        interaction.followUp({
            content: "Pong!",
        });
    }
});