import { MgmtUserModel } from '../models/mgmt-user.model';
export declare class ManagementUserService {
    private user;
    getUser(): MgmtUserModel;
    setUser(user: MgmtUserModel): void;
}
