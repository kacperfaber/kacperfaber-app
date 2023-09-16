export type Links = {
    github?: string;
    stackoverflow?: string;
    twitter?: string;
    emailTo?: string;
}

export type Config = {
    links: Links;
    contactEmail?: string;
}

export const AppConfig = process.env.APPCONFIG as unknown as Config;
