import { OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
export declare class AuthComponent implements OnDestroy {
    private location;
    alive: boolean;
    subscription: any;
    authenticated: boolean;
    token: string;
    constructor(location: Location);
    back(): boolean;
    ngOnDestroy(): void;
}
