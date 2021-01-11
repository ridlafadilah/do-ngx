import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';
export declare class CustomPreloadingStrategy implements PreloadingStrategy {
    preloadedModules: string[];
    preload(route: Route, load: () => Observable<any>): Observable<any>;
}
