import { Observable, Subject } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { API, APIModel, HTTP_SERVICE, HttpFactoryService, oauthInfo } from '@dongkap/do-core';
import { User, UserInfo } from '@dongkap/do-core';
import { ProfileIndexedDBService } from '../storage/profile-indexeddb.service';

@Injectable()
export class AuthUserService extends UserInfo {

    constructor(
        private profileIndexedDB: ProfileIndexedDBService,
        @Inject(API)private apiPath: APIModel,
        @Inject(HTTP_SERVICE)private httpBaseService: HttpFactoryService) {
            super();
    }
    private loaderUserSubject$ = new Subject<User>();

    public loadPhotoUser(): void {
        Promise.all([
            this.profileIndexedDB.get('image-b64'),
            this.profileIndexedDB.get('image'),
            this.profileIndexedDB.get('name'),
        ]).then((value: any[]) => {
            if (!value[0]) {
                if (value[1] && value[2]) {
                    this.getImage(value[1], value[2]);
                } else {
                    this.httpBaseService.HTTP_AUTH(
                    this.apiPath['profile']['get-profile'])
                    .subscribe((response: any) => {
                        Promise.all([
                            this.profileIndexedDB.put('name', response['name']),
                            this.profileIndexedDB.put('email', response['email']),
                            this.profileIndexedDB.put('image', response['image']),
                        ]).then(() => {
                            this.getImage(response['image'], response['name']);
                        });
                    });
                }
            } else {
                Promise.all([
                    this.profileIndexedDB.get('name'),
                    this.profileIndexedDB.get('image-b64'),
                ]).then((profile: any[]) => {
                    const user: User = {
                        name: profile[0],
                        picture: profile[1],
                    };
                    this.loaderUserSubject$.next(user);
                });
            }
        });
    }

    public updatePhotoUser(file: File, checksum: string): Observable<User> {
        if (file && checksum) {
            let picture: string;
            const imageBlob = new Blob([file], {
                type: 'image/png',
            });
            this.profileIndexedDB.put(oauthInfo.image, checksum).then();
            this.profileIndexedDB.put('image-blob', imageBlob).then();
            this.profileIndexedDB.get('name').then((name: any) => {
                const reader: FileReader = new FileReader();
                reader.readAsDataURL(imageBlob);
                reader.onloadend = () => {
                    picture = reader.result.toString();
                    const user: User = {
                        name: name,
                        picture: picture,
                    };
                    this.profileIndexedDB.put('image-b64', picture).then();
                    this.loaderUserSubject$.next(user);
                };
            });
        } else {
            this.loaderUserSubject$.next(null);
        }
        return this.loaderUserSubject$.asObservable();
    }

    public getUser(): Observable<any> {
        return this.loaderUserSubject$.asObservable();
    }

    private getImage(checksum: any, name: string) {
        this.httpBaseService.HTTP_AUTH(
        this.apiPath['file']['vw-photo-profile'], null, null, null,
        [checksum], 'arraybuffer')
        .pipe(tap((response: any) => {
            let picture: string;
            const imageBlob = new Blob([response], {
                type: 'image/png',
            });
            this.profileIndexedDB.put('image-blob', imageBlob).then();
            const reader: FileReader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = () => {
                picture = reader.result.toString();
                const user: User = {
                    name: name,
                    picture: picture,
                };
                this.profileIndexedDB.put('image-b64', picture).then();
                this.loaderUserSubject$.next(user);
            };
        })).subscribe();
    }

}
