import { Injectable } from '@angular/core';
import { MgmtUserModel } from '../models/mgmt-user.model';

@Injectable()
export class ManagementUserService {

    private user: MgmtUserModel;

    public getUser(): MgmtUserModel {
        return this.user;
    }

    public setUser(user: MgmtUserModel) {
        this.user = user;
    }

}
