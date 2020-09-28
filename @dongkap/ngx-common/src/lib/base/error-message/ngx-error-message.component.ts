import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'do-error-message',
  styleUrls: ['./ngx-error-message.component.scss'],
  templateUrl: './ngx-error-message.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NgxErrorMessageComponent {
    @Input() hasErrors: boolean = false;
    @Input() errorMessages: string[] = [];
    @Input() param: any;
}
