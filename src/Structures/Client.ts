import { ApplicationCommandDataResolvable, Client, ClientEvents, Collection, Guild } from "discord.js";
import { CommandType } from "../typings/Command";
import { promisify } from "util";
import glob from "glob";
import { RegisterCommandsOptions } from "../typings/Client";
import { Event } from "./Event";
import { client } from "../app";

const globPromise = promisify(glob);

export class ExtendedClient extends Client {
    commands: Collection<string, CommandType> = new Collection();

    constructor () {
        super({ intents: ["Guilds", "GuildMessages", "DirectMessages", "MessageContent"] });
    }

    Start(){
        this.RegisterModules();

        this.login(process.env.DiscordBotToken);
    }

    async ImportFile(path: string){
        return (await import(path))?.default;
    }

    async RegisterCommands({Commands, GuildID}: RegisterCommandsOptions){
        if(GuildID){
            this.guilds.cache.get(GuildID)?.commands.set(Commands);

            console.log(`Registered ${Commands.length} commands in ${GuildID}`);
        }else {
            this.application?.commands.set(Commands);

            console.log(`Registered ${Commands.length} commands globally`);
        }
    }

    async RegisterModules(){
        // Commands
        const SlashCommands: ApplicationCommandDataResolvable[] = []
        const CommandFiles = await globPromise(`${__dirname}/../Commands/*/*{.ts,.js}`);
        
        CommandFiles.forEach(async (FilePath) => {
            const command: CommandType = await this.ImportFile(FilePath);
            if(!command.name) return;

            this.commands.set(command.name, command);
            SlashCommands.push(command);
        });

        this.on("ready", () => {
            this.RegisterCommands({
                Commands: SlashCommands,
                GuildID: process.env.GuildID
            });
        });

        const EventFiles = await globPromise(`${__dirname}/../Events/*{.ts,.js}`);

        EventFiles.forEach(async (FilePath) => {
            const event: Event<keyof ClientEvents> = await this.ImportFile(FilePath);
            if(!event.event) return;
            console.log(`Loaded event ${event.event}`);
            
            this.on(event.event, event.run);
        });
    }
}