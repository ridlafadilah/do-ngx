import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
export declare class DoTreeComponent implements OnInit {
    set nodeItemsFn(nodeItems: any);
    nodeItems: any;
    options: any;
    onSelect: EventEmitter<any>;
    ngOnInit(): void;
    onSelectedItems(event: any): void;
}
