import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-container-outlet',
  styleUrls: ['./ngx-container-outlet.component.scss'],
  templateUrl: './ngx-container-outlet.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxContainerOutletComponent {
    @Input() name: string;
    @Input() label: string = '';
    @Input() colLabel: number = 3;
    @Input() colContent: number = 9;
    @Input() nolabel: boolean = false;
    @Input() required: boolean = false;
    @Input() hasErrors: boolean = false;
    @Input() errorMessages: string[] = [];
    @Input() paramError: any;
    @Input() skeleton: boolean = false;
}
