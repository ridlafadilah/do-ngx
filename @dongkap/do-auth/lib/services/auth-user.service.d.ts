import { Observable } from 'rxjs';
import { APIModel, HttpFactoryService } from '@dongkap/do-core';
import { User, UserInfo } from '@dongkap/do-core';
import { ProfileIndexedDBService } from '../storage/profile-indexeddb.service';
import { AuthIndexedDBService } from '../storage/auth-indexeddb.service';
export declare class AuthUserService extends UserInfo {
    private profileIndexedDB;
    private authIndexedDB;
    private apiPath;
    private httpBaseService;
    constructor(profileIndexedDB: ProfileIndexedDBService, authIndexedDB: AuthIndexedDBService, apiPath: APIModel, httpBaseService: HttpFactoryService);
    private loaderUserSubject$;
    loadPhotoUser(): void;
    updatePhotoUser(file: File, checksum: string): Observable<User>;
    updateNameUser(name: string): Observable<User>;
    getUser(): Observable<any>;
    private getImage;
}
