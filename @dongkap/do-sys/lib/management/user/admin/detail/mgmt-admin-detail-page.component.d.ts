import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormComponent } from '@dongkap/do-common';
import { ManagementUserService } from '../../services/mgmt-user.service';
export declare class MgmtAdminDetailPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private userService;
    profile: any;
    image: string;
    imageDefault: string;
    constructor(injector: Injector, router: Router, userService: ManagementUserService);
    ngOnInit(): void;
    onInit(serviceName: string, apiName: string): void;
}
