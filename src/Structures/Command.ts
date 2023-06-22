import { CommandType } from "../typings/Command";

export class Command {
    constructor(CommandOptions: CommandType){
        Object.assign(this, CommandOptions);
    }
}