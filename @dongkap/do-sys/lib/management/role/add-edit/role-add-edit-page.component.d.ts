import { Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseFormComponent, CheckboxModel } from '@dongkap/do-common';
import { RoleService } from '../services/role.service';
export declare class RoleAddEditPageComponent extends BaseFormComponent<any> implements OnInit {
    injector: Injector;
    private router;
    private route;
    private roleService;
    action: 'Add' | 'Edit';
    dataDefault: CheckboxModel[];
    constructor(injector: Injector, router: Router, route: ActivatedRoute, roleService: RoleService);
    ngOnInit(): void;
    onReset(): void;
    onSubmit(): void;
}
