import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'do-label-text',
  styleUrls: ['./do-label-text.component.scss'],
  templateUrl: './do-label-text.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class DoLabelTextComponent {

    @Input() colLabel: number = 3;
    @Input() colContent: number = 9;
    @Input() skeleton: boolean = false;
    @Input() name: string;
    @Input() content: string = '';
    @Input() label: string = '';
    @Input() nolabel: boolean = false;
    @Input() required: boolean = false;
    @Input() paramError: any;

    constructor() {}
}
