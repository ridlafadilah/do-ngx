import { NbDialogRef, NbIconLibraries } from '@nebular/theme';
export declare class DialogIconComponent {
    protected ref: NbDialogRef<DialogIconComponent>;
    evaIcons: any[];
    constructor(ref: NbDialogRef<DialogIconComponent>, iconsLibrary: NbIconLibraries);
    choose(icon: string): void;
}
