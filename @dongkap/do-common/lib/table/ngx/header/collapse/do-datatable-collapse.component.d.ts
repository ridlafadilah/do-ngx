import { Observable } from 'rxjs';
export declare class DoDatatableCollapseComponent {
    private openedSubject;
    opened$: Observable<boolean>;
    openedState$: Observable<string>;
    constructor();
    toggle: () => void;
}
