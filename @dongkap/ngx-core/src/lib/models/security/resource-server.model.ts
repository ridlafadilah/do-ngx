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
}

export const oauthInfo = {
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    token_type: 'token_type',
    public_key: 'xrkey',
    expires_in: 'expires_in',
    authority: 'authority',
    image: 'image',
    email: 'email',
    menus: 'menus',
    extras: 'extras',
    server_date: 'server_date',
    locale: 'locale',
    theme: 'theme',
    name: 'name',
};

export enum TypeDataOauth {
    OAUTH = 'oauth',
    PROFILE = 'profile',
    SETTINGS = 'settings',
    LOCALSTORAGE = 'localstorage',
}

export const oauthInfoModels: OauthInfoModel[] = [
    { key: oauthInfo.access_token, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.refresh_token, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.token_type, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.public_key, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.expires_in, enc: true, type: TypeDataOauth.OAUTH, string: false },
    { key: oauthInfo.authority, enc: true, type: TypeDataOauth.OAUTH, string: false },
    { key: oauthInfo.menus, enc: true, type: TypeDataOauth.OAUTH, string: false },
    { key: oauthInfo.extras, enc: true, type: TypeDataOauth.OAUTH, string: false },
    { key: oauthInfo.name, enc: false, type: TypeDataOauth.PROFILE, string: true },
    { key: oauthInfo.email, enc: false, type: TypeDataOauth.PROFILE, string: true },
    { key: oauthInfo.image, enc: false, type: TypeDataOauth.PROFILE, string: true },
    { key: oauthInfo.locale, enc: false, type: TypeDataOauth.SETTINGS, string: true },
    { key: oauthInfo.theme, enc: false, type: TypeDataOauth.SETTINGS, string: true },
    { key: oauthInfo.server_date, enc: false, type: TypeDataOauth.SETTINGS, string: true },
];

export interface OauthInfoModel {
    key: string;
    enc: boolean;
    type: TypeDataOauth;
    string: boolean;
}

export const signatureHeader = {
    authorization: 'Authorization',
    signature: 'X-XA-Signature',
    timestamp: 'X-XA-Timestamp',
    key: 'X-XA-Key',
    mark: 'X-XA-Mark',
};
