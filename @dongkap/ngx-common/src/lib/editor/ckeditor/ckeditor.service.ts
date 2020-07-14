import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ENVIRONMENT, Environment } from '@dongkap/ngx-core';
import { forkJoin, Observable, ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class CKEditorService {

    private _js: string;
    private _dataScript: string = 'ckeditor';
    private _contentcript: string;
    private _loadedLibraries: { [url: string]: ReplaySubject<any> } = {};
    private ngUnsubscribe = new Subject();

    constructor(
        @Inject(DOCUMENT) private readonly document: any,
        @Inject(ENVIRONMENT) public envi: Environment) {
        this._js = this.envi.basePath + 'assets/ckeditor/ckeditor.js';
        this._contentcript = 'window[\'CKEDITOR_BASEPATH\'] = \'' + this.envi.basePath + 'assets/ckeditor/\'';
        this.inputScript(this._contentcript, this._dataScript);
        this.lazyLoad(this._js, this._dataScript)
        .pipe(takeUntil(this.ngUnsubscribe)).subscribe(_ => {});
    }

    lazyLoad(url: string, data: string): Observable<any> {
        return forkJoin([this.loadScript(url, data)]);
    }

    public destroyScript() {
        this.ngUnsubscribe.next(true);
        this.ngUnsubscribe.complete();
        this.ngUnsubscribe.unsubscribe();
        this.document.querySelectorAll('script[data-script="' + this._dataScript + '"]').forEach(element => {
            element.remove();
        });
    }

    private loadScript(url: string, data: string): Observable<any> {
        if (this._loadedLibraries[url]) {
            return this._loadedLibraries[url].asObservable();
        }

        this._loadedLibraries[url] = new ReplaySubject();

        const script: HTMLScriptElement = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.setAttribute('data-script', data);
        script.onload = () => {
            this._loadedLibraries[url].next();
            this._loadedLibraries[url].complete();
        };

        this.document.head.appendChild(script);

        return this._loadedLibraries[url].asObservable();
    }

    private inputScript(content: string, data: string): void {
        const script: HTMLScriptElement = this.document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = content;
        script.setAttribute('data-script', data);

        this.document.head.appendChild(script);
    }
}
