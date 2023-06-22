# Typescript Discord Bot Template

DiscordBotTemplate is a TypeScript-based Discord bot template that provides a dynamic slash command and event system. It serves as a starting point for creating powerful and extensible Discord bots with ease.

## Features

- Dynamic slash command system: Easily create, register, and manage slash commands with a simple and intuitive syntax.
- Event system: Handle various Discord events, such as message events, reaction events, member join events, and more, with flexibility and ease.
- TypeScript-based: Leverage the benefits of TypeScript, including static typing, improved code organization, and enhanced tooling support.
- Modular architecture: Organize your bot's functionality into modules for better code structure and maintainability.
- Built-in command and event handling: Handle commands and events effortlessly with built-in utilities and decorators.
- Customizable and extendable: Customize and extend the bot template to fit your specific needs.

## Prerequisites

To use DiscordBotTemplate, make sure you have the following prerequisites installed:

- Node.js (version 12 or higher)
- npm (Node Package Manager)
- TypeScript

## Getting Started

Follow the steps below to get started with DiscordBotTemplate:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/Abdallah-Alwarawreh/DiscordBotTemplate.git
```

2. Install the project dependencies:

```bash
cd DiscordBotTemplate
npm install
```

3. Configure your bot token:

   - Rename the `.env.example` file to `.env`.
   - Open the `.env` file and replace `YOUR_BOT_TOKEN` with your Discord bot token. You can obtain a token by creating a new bot on the Discord Developer Portal.

4. Build the TypeScript code:

```bash
npm run build
```

5. Start the bot:

```bash
npm start
```

## Creating Slash Commands

To create a new slash command, follow these steps:

1. Create a new TypeScript file under the `src/Commands/<CommandName>.ts` directory.
2. Define your command using the provided decorators and interfaces.
3. Implement the command's functionality.

Here's an example of a simple ping command:

```typescript
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
```

Make sure to import the necessary decorators and interfaces from the `discord.js` library.

## Handling Discord Events

DiscordBotTemplate provides an event system that allows you to handle various Discord events. To create an event handler, follow these steps:

1. Create a new TypeScript file under the `src/Events/<EventName>.ts` directory.
2. Define your event handler using the provided decorators and interfaces.
3. Implement the event handling logic.

Here's an example of a simple message event handler:

```typescript
import { CommandInteractionOptionResolver } from "discord.js";
import { Event } from "../Structures/Event";
import { client } from "../app";
import { ExtendedInteraction } from "../typings/Command";

export default new Event("messageCreate", async (message) => {
    console.log(message.content);
});
```

## Contributing

Contributions are welcome! If you want to contribute to DiscordBotTemplate, please follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [License](LICENSE.md).

## Acknowledgments

- Discord.js - A powerful library for interacting with the
