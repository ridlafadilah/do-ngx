export declare class EncryptionService {
    private ivSize;
    getHmacSha256(secret: string, message: string, hex?: boolean): string;
    encryptAES(secretKey: string, message: string): string;
    decryptAES(secretKey: string, encryptMessage: string): string;
}
