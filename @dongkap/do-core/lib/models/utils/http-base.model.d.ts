export interface APIModel {
    [name: string]: {
        [name: string]: HttpBaseModel;
    };
}
export interface HttpBaseModel {
    server: HostModel;
    path?: string;
    method?: HttpMethod;
    file?: FileModel;
}
export interface FileModel {
    filename: string;
    extension: string;
}
export declare enum HttpMethod {
    POST = "POST",
    GET = "GET",
    PUT = "PUT",
    DELETE = "DELETE"
}
export declare class HostModel {
    protocol?: string;
    host: string;
    port?: number | null;
}
export interface ApiBaseResponse {
    respStatusCode: string;
    respStatusMessage: {
        [name: string]: string;
    };
}
