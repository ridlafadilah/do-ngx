import { Observable } from 'rxjs';
export declare class ParameterEditGroupCollapseComponent {
    private openedSubject;
    opened$: Observable<boolean>;
    openedState$: Observable<string>;
    constructor();
    toggle: () => void;
}
