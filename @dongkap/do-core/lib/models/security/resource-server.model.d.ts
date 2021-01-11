export interface SecurityResourceModel {
    client_id: string;
    client_secret: string;
    grant_type: string;
    private_key?: string;
    aes_key?: string;
    session_idle?: number;
    session_timeout?: number;
    signature?: boolean;
    vapid?: string;
    recaptcha?: string;
}
export declare const oauthInfo: {
    access_token: string;
    refresh_token: string;
    token_type: string;
    public_key: string;
    expires_in: string;
    authority: string;
    provider: string;
    image: string;
    email: string;
    menus: string;
    extras: string;
    server_date: string;
    locale: string;
    theme: string;
    name: string;
};
export declare enum TypeDataOauth {
    OAUTH = "oauth",
    PROFILE = "profile",
    SETTINGS = "settings",
    LOCALSTORAGE = "localstorage"
}
export declare const oauthInfoModels: OauthInfoModel[];
export interface OauthInfoModel {
    key: string;
    enc: boolean;
    type: TypeDataOauth;
    string: boolean;
}
export declare const signatureHeader: {
    authorization: string;
    signature: string;
    timestamp: string;
    key: string;
    mark: string;
};
