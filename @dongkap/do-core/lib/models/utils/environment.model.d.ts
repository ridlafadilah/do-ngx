export declare class Environment {
    production: boolean;
    locale: string;
    basePath: string;
    host: {
        [name: string]: Server;
    };
}
export declare class Server {
    protocol?: string;
    host: string;
    port?: string;
}
