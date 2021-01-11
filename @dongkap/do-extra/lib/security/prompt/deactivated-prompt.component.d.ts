import { NbDialogRef } from '@nebular/theme';
export declare class DeactivatedPromptComponent {
    protected ref: NbDialogRef<DeactivatedPromptComponent>;
    disabled: boolean;
    password: string;
    constructor(ref: NbDialogRef<DeactivatedPromptComponent>);
    submit(password: any): void;
}
