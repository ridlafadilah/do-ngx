import { Component, Input, ViewEncapsulation, Optional, Self, Inject, LOCALE_ID } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';

@Component({
  selector: 'do-input-text',
  styleUrls: ['./do-input-text.component.scss'],
  templateUrl: './do-input-text.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class DoInputTextComponent extends DoValueAccessor<string> {
    @Input() placeholder: string;
    @Input() colLabel: number = 3;
    @Input() colInput: number = 9;
    @Input() minLength: number = 0;
    @Input() maxLength: number = 100;
    @Input() step: number = 1;
    @Input() type: 'text' | 'password' | 'number' = 'text';

    constructor(@Optional() @Self() ngControl: NgControl,
      @Inject(LOCALE_ID) public locale: string) {
      super(ngControl, locale);
    }
}
