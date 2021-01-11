import { NbDialogRef } from '@nebular/theme';
export declare class TermsConditionsComponent {
    protected ref: NbDialogRef<TermsConditionsComponent>;
    content: string;
    action: 'Agree' | 'Close';
    constructor(ref: NbDialogRef<TermsConditionsComponent>);
    submit(): void;
}
