import { Injectable } from '@angular/core';
import { RoleModel } from '@dongkap/do-core';

@Injectable()
export class FunctionControlService {

    private role: RoleModel;

    public getRole(): RoleModel {
        return this.role;
    }

    public setRole(role: RoleModel) {
        this.role = role;
    }

}
