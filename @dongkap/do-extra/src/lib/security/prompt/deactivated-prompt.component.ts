import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'do-deactivated-prompt',
  templateUrl: 'deactivated-prompt.component.html',
  styleUrls: ['deactivated-prompt.component.scss'],
})
export class DeactivatedPromptComponent {

  public disabled: boolean = false;
  public password: string;

  constructor(protected ref: NbDialogRef<DeactivatedPromptComponent>) {
  }

  submit(password) {
    this.disabled = true;
    this.ref.close(password);
  }
}
