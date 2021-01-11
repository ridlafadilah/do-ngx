import { Observable, Subject } from 'rxjs';
export declare class LayoutService {
    protected layoutSize$: Subject<unknown>;
    protected layoutSizeChange$: Observable<unknown>;
    changeLayoutSize(): void;
    onChangeLayoutSize(): Observable<any>;
    onSafeChangeLayoutSize(): Observable<any>;
}
