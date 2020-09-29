import {
  Component,
  Inject,
  OnDestroy,
  Input,
  ViewEncapsulation,
  Optional,
  Self,
  LOCALE_ID,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { DoValueAccessor } from '../../base/do-value-accessor.component';

@Component({
  selector: 'do-ckeditor',
  styleUrls: ['./ckeditor.component.scss'],
  templateUrl: './ckeditor.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CaldeiraKnabbenEditorComponent extends DoValueAccessor<string> implements OnDestroy {
  @Input() placeholder: string;
  @Input() colLabel: number = 3;
  @Input() colInput: number = 9;
  @Input() minLength: number = 0;
  @Input() maxLength: number = 100;
  @Input() height: number = 320;
  @Input() config: any = {
    skin: 'bootstrapck',
    height: this.height,

    allowedContent: false,
    forcePasteAsPlainText: true,
    font_names: 'Open Sans;sans-serif;Arial;Times New Roman;Verdana',
    toolbarGroups: [
      { name: 'document', groups: ['mode', 'document', 'doctools'] },
      { name: 'clipboard', groups: ['clipboard', 'undo'] },
      { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
      { name: 'forms', groups: ['forms'] },
      '/',
      { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
      { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
      { name: 'links', groups: ['links'] },
      { name: 'insert', groups: ['insert'] },
      '/',
      { name: 'styles', groups: ['styles'] },
      { name: 'colors', groups: ['colors'] },
      { name: 'tools', groups: ['tools'] },
      { name: 'others', groups: ['others'] },
      { name: 'about', groups: ['about'] },
    ],
    removeButtons: `Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,
                    PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,
                    Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,
                    HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,
                    Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,
                    Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,
                    Iframe,Maximize,ShowBlocks,About`,
  };

  constructor(@Optional() @Self() ngControl: NgControl,
    @Inject(LOCALE_ID) public locale: string) {
    super(ngControl, locale);
  }

  editorChange(element: Element) {
    if (element) {
      if (this.ngControl.invalid) {
        if (!element.getAttribute('class').endsWith('status-danger'))
          element.setAttribute('class', element.getAttribute('class').concat(' status-danger'));
        this.ngControl.control.markAsTouched();
      } else {
        if (element.getAttribute('class').endsWith('status-danger')) {
          element.setAttribute('class', element.getAttribute('class').replace('status-danger', ''));
        }
      }
    }
  }

  ngOnDestroy(): void {}

}
