import { Component, ElementRef, ViewEncapsulation, Input, forwardRef, Output, EventEmitter, Inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ENVIRONMENT, Environment } from '@dongkap/do-core';
export class MCECoreComponent {
    constructor(host, envi) {
        this.host = host;
        this.envi = envi;
        this.plugins = ['link', 'paste', 'table'];
        this.height = 320;
        this.id = 'tinyMce';
        this.readonly = false;
        this.change = new EventEmitter();
        this.editorchange = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.onChange = (_) => { };
        this.onTouched = (_) => { };
    }
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
            init_instance_callback: (editor) => {
                editor && this.value && this.editor.setContent(this.value);
            },
        });
    }
    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
    get value() { return this._value; }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this.onChange(value);
        }
    }
    writeValue(value) {
        if (value) {
            this._value = value;
            this.onChange(this.value);
        }
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
}
MCECoreComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Environment, decorators: [{ type: Inject, args: [ENVIRONMENT,] }] }
];
MCECoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-mce-core',
                template: '<div id="{{id}}"></div>',
                encapsulation: ViewEncapsulation.None,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MCECoreComponent),
                        multi: true,
                    }]
            },] }
];
MCECoreComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Environment, decorators: [{ type: Inject, args: [ENVIRONMENT,] }] }
];
MCECoreComponent.propDecorators = {
    plugins: [{ type: Input }],
    height: [{ type: Input }],
    id: [{ type: Input }],
    readonly: [{ type: Input }],
    _value: [{ type: Input, args: ['value',] }],
    change: [{ type: Output }],
    editorchange: [{ type: Output }],
    focus: [{ type: Output }],
    blur: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWNlLWNvcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci90aW55LW1jZS9tY2UtY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWM1RCxNQUFNLE9BQU8sZ0JBQWdCO0lBZ0IzQixZQUNVLElBQWdCLEVBQ0ksSUFBaUI7UUFEckMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNJLFNBQUksR0FBSixJQUFJLENBQWE7UUFoQnRDLFlBQU8sR0FBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0MsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQUNyQixPQUFFLEdBQVcsU0FBUyxDQUFDO1FBQ3ZCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFekIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUQsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25ELFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNyRCxhQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUMxQixjQUFTLEdBQUcsQ0FBQyxDQUFPLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztJQU8vQixDQUFDO0lBRUwsZUFBZTtRQUNiLE9BQU8sQ0FBQyxJ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TSxVQUFVLENBQUMsS0FBVTtRQUMxQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU8sSUFBVSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkQsaUJBQWlCLENBQUMsRUFBTyxJQUFVLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O1lBakV6QyxVQUFVO1lBQ1UsV0FBVyx1QkFBNUMsTUFBTSxTQUFDLFdBQVc7OztZQTVCdEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsU0FBUyxFQUFFLENBQUM7d0JBQ1IsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDL0MsS0FBSyxFQUFFLElBQUk7cUJBQ2QsQ0FBQzthQUNIOzs7WUF6QkMsVUFBVTtZQVlVLFdBQVcsdUJBZ0M1QixNQUFNLFNBQUMsV0FBVzs7O3NCQWhCcEIsS0FBSztxQkFDTCxLQUFLO2lCQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLLFNBQUMsT0FBTztxQkFDYixNQUFNOzJCQUNOLE1BQU07b0JBQ04sTUFBTTttQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5wdXQsXG4gIGZvcndhcmRSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRU5WSVJPTk1FTlQsIEVudmlyb25tZW50IH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5cbmRlY2xhcmUgdmFyIHRpbnltY2U6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tbWNlLWNvcmUnLFxuICB0ZW1wbGF0ZTogJzxkaXYgaWQ9XCJ7e2lkfX1cIj48L2Rpdj4nLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFt7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1DRUNvcmVDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBNQ0VDb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQElucHV0KCkgcGx1Z2luczogc3RyaW5nW10gPSBbJ2xpbmsnLCAncGFzdGUnLCAndGFibGUnXTtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSAzMjA7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAndGlueU1jZSc7XG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgndmFsdWUnKSAgX3ZhbHVlOiBhbnk7XG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0b3JjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHB1YmxpYyBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBwdWJsaWMgb25Ub3VjaGVkID0gKF8/OiBhbnkpID0+IHt9O1xuXG4gIGVkaXRvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaG9zdDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KEVOVklST05NRU5UKSBwdWJsaWMgZW52aTogRW52aXJvbm1lbnQsXG4gICkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRpbnltY2UuaW5pdCh7XG4gICAgICBzZWxlY3RvcjogJyMnICsgdGhpcy5pZCxcbiAgICAgIHRhcmdldDogdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICBwbHVnaW5zOiB0aGlzLnBsdWdpbnMsXG4gICAgICBtZW51OiB7XG4gICAgICAgIGZpbGU6IHsgdGl0bGU6ICdGaWxlJywgaXRlbXM6ICduZXdkb2N1bWVudCByZXN0b3JlZHJhZnQgfCBwcmV2aWV3IHwgcHJpbnQgJyB9LFxuICAgICAgICBlZGl0OiB7IHRpdGxlOiAnRWRpdCcsIGl0ZW1zOiAndW5kbyByZWRvIHwgY3V0IGNvcHkgcGFzdGUgfCBzZWxlY3RhbGwgfCBzZWFyY2hyZXBsYWNlJyB9LFxuICAgICAgICB2aWV3OiB7IHRpdGxlOiAnVmlldycsIGl0ZW1zOiAnY29kZSB8IHZpc3VhbGFpZCB2aXN1YWxjaGFycyB2aXN1YWxibG9ja3MgfCBzcGVsbGNoZWNrZXIgfCBwcmV2aWV3IGZ1bGxzY3JlZW4nIH0sXG4gICAgICAgIGluc2VydDogeyB0aXRsZTogJ0luc2VydCcsIGl0ZW1zOiAnaW1hZ2UgbGluayBtZWRpYSB0ZW1wbGF0ZSBjb2Rlc2FtcGxlIGluc2VydHRhYmxlIHwgY2hhcm1hcCBlbW90aWNvbnMgaHIgfCBwYWdlYnJlYWsgbm9uYnJlYWtpbmcgYW5jaG9yIHRvYyB8IGluc2VydGRhdGV0aW1lJyB9LFxuICAgICAgICBmb3JtYXQ6IHsgdGl0bGU6ICdGb3JtYXQnLCBpdGVtczogJ2JvbGQgaXRhbGljIHVuZGVybGluZSBzdHJpa2V0aHJvdWdoIHN1cGVyc2NyaXB0IHN1YnNjcmlwdCBjb2RlZm9ybWF0IHwgZm9ybWF0cyBibG9ja2Zvcm1hdHMgZm9udGZvcm1hdHMgZm9udHNpemVzIGFsaWduIHwgZm9yZWNvbG9yIGJhY2tjb2xvciB8IHJlbW92ZWZvcm1hdCcgfSxcbiAgICAgICAgdG9vbHM6IHsgdGl0bGU6ICdUb29scycsIGl0ZW1zOiAnc3BlbGxjaGVja2VyIHNwZWxsY2hlY2tlcmxhbmd1YWdlIHwgY29kZSB3b3JkY291bnQnIH0sXG4gICAgICAgIHRhYmxlOiB7IHRpdGxlOiAnVGFibGUnLCBpdGVtczogJ2luc2VydHRhYmxlIHwgY2VsbCByb3cgY29sdW1uIHwgdGFibGVwcm9wcyBkZWxldGV0YWJsZScgfSxcbiAgICAgICAgaGVscDogeyB0aXRsZTogJ0hlbHAnLCBpdGVtczogJ2hlbHAnIH1cbiAgICAgIH0sXG4gICAgICB0b29sYmFyOiAndW5kbyByZWRvIHwgc3R5bGVzZWxlY3QgfCBib2xkIGl0YWxpYyB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8ICcgK1xuICAgICAgICAnYnVsbGlzdCBudW1saXN0IG91dGRlbnQgaW5kZW50IHwgbGluayBpbWFnZSB8IHByaW50IHByZXZpZXcgbWVkaWEgZnVsbHBhZ2UgfCAnICtcbiAgICAgICAgJ2ZvcmVjb2xvciBiYWNrY29sb3IgZW1vdGljb25zIHwgaGVscCcsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgcmVhZG9ubHk6IHRoaXMucmVhZG9ubHksXG4gICAgICBzZXR1cDogZWRpdG9yID0+IHtcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XG4gICAgICAgIGVkaXRvci5vbigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gZWRpdG9yLmdldENvbnRlbnQoKTtcbiAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgICAgIHRoaXMuZWRpdG9yY2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWRpdG9yLm9uKCdmb2N1cycsIChldmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlZGl0b3Iub24oJ2JsdXInLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGluaXRfaW5zdGFuY2VfY2FsbGJhY2s6IChlZGl0b3I6IGFueSkgPT4ge1xuICAgICAgICBlZGl0b3IgJiYgdGhpcy52YWx1ZSAmJiB0aGlzLmVkaXRvci5zZXRDb250ZW50KHRoaXMudmFsdWUpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRpbnltY2UucmVtb3ZlKHRoaXMuZWRpdG9yKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cblxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHsgdGhpcy5vbkNoYW5nZSA9IGZuOyB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuXG59XG4iXX0=