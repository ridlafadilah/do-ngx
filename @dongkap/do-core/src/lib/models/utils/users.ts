import { Observable } from 'rxjs';

export interface User {
  name: string;
  picture: string;
}

export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}

export abstract class UserData {
  abstract getUsers(): Observable<User[]>;
  abstract getContacts(): Observable<Contacts[]>;
  abstract getRecentUsers(): Observable<RecentUsers[]>;
}

export abstract class UserInfo {
  abstract loadPhotoUser(): void;
  abstract updatePhotoUser(file: File, checksum: string): Observable<User>;
  abstract getUser(): Observable<User>;
}
