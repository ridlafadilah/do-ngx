import { NbDialogRef } from '@nebular/theme';
export declare class DialogFlagComponent {
    protected ref: NbDialogRef<DialogFlagComponent>;
    flags: string[];
    constructor(ref: NbDialogRef<DialogFlagComponent>);
    choose(flag: string): void;
}
