export type Links = {
    github?: string;
    stackoverflow?: string;
    twitter?: string;
    emailTo?: string;
}

export type Config = {
    links: Links;
}

export const AppConfig = process.env.APPCONFIG as unknown as Config;