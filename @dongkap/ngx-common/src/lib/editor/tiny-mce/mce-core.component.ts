import {
  Component,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  ViewEncapsulation,
  Input,
  forwardRef,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ENVIRONMENT, Environment } from '@dongkap/ngx-core';

declare var tinymce: any;

@Component({
  selector: 'do-mce-core',
  template: '<div id="{{id}}"></div>',
  encapsulation: ViewEncapsulation.None,
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MCECoreComponent),
      multi: true,
  }],
})
export class MCECoreComponent implements OnDestroy, AfterViewInit, ControlValueAccessor {

  @Input() plugins: string[] = ['link', 'paste', 'table'];
  @Input() height: number = 320;
  @Input() id: string = 'tinyMce';
  @Input() readonly: boolean = false;
  @Input('value')  _value: any;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  @Output() editorchange: EventEmitter<any> = new EventEmitter<any>();
  @Output() focus: EventEmitter<any> = new EventEmitter<any>();
  @Output() blur: EventEmitter<any> = new EventEmitter<any>();
  public onChange = (_: any) => {};
  public onTouched = (_?: any) => {};

  editor: any;

  constructor(
    private host: ElementRef,
    @Inject(ENVIRONMENT) public envi: Environment,
  ) { }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.id,
      target: this.host.nativeElement,
      plugins: this.plugins,
      menu: {
        file: { title: 'File', items: 'newdocument restoredraft | preview | print ' },
        edit: { title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace' },
        view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen' },
        insert: { title: 'Insert', items: 'image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime' },
        format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat' },
        tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | code wordcount' },
        table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' },
        help: { title: 'Help', items: 'help' }
      },
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent | link image | print preview media fullpage | ' +
        'forecolor backcolor emoticons | help',
      height: this.height,
      readonly: this.readonly,
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', (event) => {
          this.value = editor.getContent();
          this.change.emit(this.value);
          this.editorchange.emit(event);
        });
        editor.on('focus', (event) => {
          this.focus.emit(event);
        });
        editor.on('blur', (event) => {
          this.blur.emit(event);
        });
      },
      init_instance_callback: (editor: any) => {
        editor && this.value && this.editor.setContent(this.value);
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  get value(): any { return this._value; }

  set value(value: any) {
    if (this._value !== value) {
      this._value = value;
      this.onChange(value);
    }
  }

  public writeValue(value: any): void {
    if (value) {
      this._value = value;
      this.onChange(this.value);
    }
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }

}
