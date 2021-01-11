import { EventEmitter } from '@angular/core';
export declare class DragDropDirective {
    onFileDropped: EventEmitter<any>;
    opacity: string;
    background: string;
    styleOpacity: string;
    onDragOver(evt: any): void;
    onDragLeave(evt: any): void;
    ondrop(evt: any): void;
    onMouseOver(evt: any): void;
    onMouseLeave(evt: any): void;
}
