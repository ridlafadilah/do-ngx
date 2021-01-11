import { FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
export declare class DeactivatedProviderPromptComponent {
    protected ref: NbDialogRef<DeactivatedProviderPromptComponent>;
    disabled: boolean;
    patternEmail: string;
    form: FormGroup;
    constructor(ref: NbDialogRef<DeactivatedProviderPromptComponent>);
    submit(): void;
}
