declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'dev' | 'prod';
            DiscordBotToken: string;
            TelegramBotToken: string;
            GuildID: string;
        }
    }
}

export {}