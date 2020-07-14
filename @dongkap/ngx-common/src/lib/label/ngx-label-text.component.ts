import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-label-text',
  styleUrls: ['./ngx-label-text.component.scss'],
  templateUrl: './ngx-label-text.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxLabelTextComponent {

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
