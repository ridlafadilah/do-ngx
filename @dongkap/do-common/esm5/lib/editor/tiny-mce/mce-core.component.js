import { Component, ElementRef, ViewEncapsulation, Input, forwardRef, Output, EventEmitter, Inject, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ENVIRONMENT, Environment } from '@dongkap/do-core';
var MCECoreComponent = /** @class */ (function () {
    function MCECoreComponent(host, envi) {
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
        this.onChange = function (_) { };
        this.onTouched = function (_) { };
    }
    MCECoreComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
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
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function (event) {
                    _this.value = editor.getContent();
                    _this.change.emit(_this.value);
                    _this.editorchange.emit(event);
                });
                editor.on('focus', function (event) {
                    _this.focus.emit(event);
                });
                editor.on('blur', function (event) {
                    _this.blur.emit(event);
                });
            },
            init_instance_callback: function (editor) {
                editor && _this.value && _this.editor.setContent(_this.value);
            },
        });
    };
    MCECoreComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    Object.defineProperty(MCECoreComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (value) {
            if (this._value !== value) {
                this._value = value;
                this.onChange(value);
            }
        },
        enumerable: false,
        configurable: true
    });
    MCECoreComponent.prototype.writeValue = function (value) {
        if (value) {
            this._value = value;
            this.onChange(this.value);
        }
    };
    MCECoreComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    MCECoreComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    MCECoreComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Environment, decorators: [{ type: Inject, args: [ENVIRONMENT,] }] }
    ]; };
    MCECoreComponent.decorators = [
        { type: Component, args: [{
                    selector: 'do-mce-core',
                    template: '<div id="{{id}}"></div>',
                    encapsulation: ViewEncapsulation.None,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return MCECoreComponent; }),
                            multi: true,
                        }]
                },] }
    ];
    MCECoreComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Environment, decorators: [{ type: Inject, args: [ENVIRONMENT,] }] }
    ]; };
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
    return MCECoreComponent;
}());
export { MCECoreComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWNlLWNvcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRvbmdrYXAvZG8tY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci90aW55LW1jZS9tY2UtY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUk1RDtJQTBCRSwwQkFDVSxJQUFnQixFQUNJLElBQWlCO1FBRHJDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDSSxTQUFJLEdBQUosSUFBSSxDQUFhO1FBaEJ0QyxZQUFPLEdBQWEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLFdBQU0sR0FBVyxHQUFHLENBQUM7UUFDckIsT0FBRSxHQUFXLFNBQVMsQ0FBQztRQUN2QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRXpCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFELFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuRCxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDckQsYUFBUSxHQUFHLFVBQUMsQ0FBTSxJQUFNLENBQUMsQ0FBQztRQUMxQixjQUFTLEdBQUcsVUFBQyxDQUFPLElBQU0sQ0FBQyxDQUFDO0lBTy9CLENBQUM7SUFFTCwwQ0FBZSxHQUFmO1FBQUEsaUJBc0NDO1FBckNDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDWCxRQUFR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Q1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLEVBQU8sSUFBVSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkQsNENBQWlCLEdBQWpCLFVBQWtCLEVBQU8sSUFBVSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7O2dCQWpFekMsVUFBVTtnQkFDVSxXQUFXLHVCQUE1QyxNQUFNLFNBQUMsV0FBVzs7O2dCQTVCdEIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsU0FBUyxFQUFFLENBQUM7NEJBQ1IsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUM7NEJBQy9DLEtBQUssRUFBRSxJQUFJO3lCQUNkLENBQUM7aUJBQ0g7OztnQkF6QkMsVUFBVTtnQkFZVSxXQUFXLHVCQWdDNUIsTUFBTSxTQUFDLFdBQVc7OzswQkFoQnBCLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSyxTQUFDLE9BQU87eUJBQ2IsTUFBTTsrQkFDTixNQUFNO3dCQUNOLE1BQU07dUJBQ04sTUFBTTs7SUEwRVQsdUJBQUM7Q0FBQSxBQTlGRCxJQThGQztTQXBGWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbnB1dCxcbiAgZm9yd2FyZFJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBFTlZJUk9OTUVOVCwgRW52aXJvbm1lbnQgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcblxuZGVjbGFyZSB2YXIgdGlueW1jZTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby1tY2UtY29yZScsXG4gIHRlbXBsYXRlOiAnPGRpdiBpZD1cInt7aWR9fVwiPjwvZGl2PicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW3tcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTUNFQ29yZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIE1DRUNvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBASW5wdXQoKSBwbHVnaW5zOiBzdHJpbmdbXSA9IFsnbGluaycsICdwYXN0ZScsICd0YWJsZSddO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciA9IDMyMDtcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICd0aW55TWNlJztcbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCd2YWx1ZScpICBfdmFsdWU6IGFueTtcbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVkaXRvcmNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHVibGljIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIHB1YmxpYyBvblRvdWNoZWQgPSAoXz86IGFueSkgPT4ge307XG5cbiAgZWRpdG9yOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmLFxuICAgIEBJbmplY3QoRU5WSVJPTk1FTlQpIHB1YmxpYyBlbnZpOiBFbnZpcm9ubWVudCxcbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGlueW1jZS5pbml0KHtcbiAgICAgIHNlbGVjdG9yOiAnIycgKyB0aGlzLmlkLFxuICAgICAgdGFyZ2V0OiB0aGlzLmhvc3QubmF0aXZlRWxlbWVudCxcbiAgICAgIHBsdWdpbnM6IHRoaXMucGx1Z2lucyxcbiAgICAgIG1lbnU6IHtcbiAgICAgICAgZmlsZTogeyB0aXRsZTogJ0ZpbGUnLCBpdGVtczogJ25ld2RvY3VtZW50IHJlc3RvcmVkcmFmdCB8IHByZXZpZXcgfCBwcmludCAnIH0sXG4gICAgICAgIGVkaXQ6IHsgdGl0bGU6ICdFZGl0JywgaXRlbXM6ICd1bmRvIHJlZG8gfCBjdXQgY29weSBwYXN0ZSB8IHNlbGVjdGFsbCB8IHNlYXJjaHJlcGxhY2UnIH0sXG4gICAgICAgIHZpZXc6IHsgdGl0bGU6ICdWaWV3JywgaXRlbXM6ICdjb2RlIHwgdmlzdWFsYWlkIHZpc3VhbGNoYXJzIHZpc3VhbGJsb2NrcyB8IHNwZWxsY2hlY2tlciB8IHByZXZpZXcgZnVsbHNjcmVlbicgfSxcbiAgICAgICAgaW5zZXJ0OiB7IHRpdGxlOiAnSW5zZXJ0JywgaXRlbXM6ICdpbWFnZSBsaW5rIG1lZGlhIHRlbXBsYXRlIGNvZGVzYW1wbGUgaW5zZXJ0dGFibGUgfCBjaGFybWFwIGVtb3RpY29ucyBociB8IHBhZ2VicmVhayBub25icmVha2luZyBhbmNob3IgdG9jIHwgaW5zZXJ0ZGF0ZXRpbWUnIH0sXG4gICAgICAgIGZvcm1hdDogeyB0aXRsZTogJ0Zvcm1hdCcsIGl0ZW1zOiAnYm9sZCBpdGFsaWMgdW5kZXJsaW5lIHN0cmlrZXRocm91Z2ggc3VwZXJzY3JpcHQgc3Vic2NyaXB0IGNvZGVmb3JtYXQgfCBmb3JtYXRzIGJsb2NrZm9ybWF0cyBmb250Zm9ybWF0cyBmb250c2l6ZXMgYWxpZ24gfCBmb3JlY29sb3IgYmFja2NvbG9yIHwgcmVtb3ZlZm9ybWF0JyB9LFxuICAgICAgICB0b29sczogeyB0aXRsZTogJ1Rvb2xzJywgaXRlbXM6ICdzcGVsbGNoZWNrZXIgc3BlbGxjaGVja2VybGFuZ3VhZ2UgfCBjb2RlIHdvcmRjb3VudCcgfSxcbiAgICAgICAgdGFibGU6IHsgdGl0bGU6ICdUYWJsZScsIGl0ZW1zOiAnaW5zZXJ0dGFibGUgfCBjZWxsIHJvdyBjb2x1bW4gfCB0YWJsZXByb3BzIGRlbGV0ZXRhYmxlJyB9LFxuICAgICAgICBoZWxwOiB7IHRpdGxlOiAnSGVscCcsIGl0ZW1zOiAnaGVscCcgfVxuICAgICAgfSxcbiAgICAgIHRvb2xiYXI6ICd1bmRvIHJlZG8gfCBzdHlsZXNlbGVjdCB8IGJvbGQgaXRhbGljIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25qdXN0aWZ5IHwgJyArXG4gICAgICAgICdidWxsaXN0IG51bWxpc3Qgb3V0ZGVudCBpbmRlbnQgfCBsaW5rIGltYWdlIHwgcHJpbnQgcHJldmlldyBtZWRpYSBmdWxscGFnZSB8ICcgK1xuICAgICAgICAnZm9yZWNvbG9yIGJhY2tjb2xvciBlbW90aWNvbnMgfCBoZWxwJyxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICByZWFkb25seTogdGhpcy5yZWFkb25seSxcbiAgICAgIHNldHVwOiBlZGl0b3IgPT4ge1xuICAgICAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcbiAgICAgICAgZWRpdG9yLm9uKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBlZGl0b3IuZ2V0Q29udGVudCgpO1xuICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgdGhpcy5lZGl0b3JjaGFuZ2UuZW1pdChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlZGl0b3Iub24oJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVkaXRvci5vbignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgaW5pdF9pbnN0YW5jZV9jYWxsYmFjazogKGVkaXRvcjogYW55KSA9PiB7XG4gICAgICAgIGVkaXRvciAmJiB0aGlzLnZhbHVlICYmIHRoaXMuZWRpdG9yLnNldENvbnRlbnQodGhpcy52YWx1ZSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGlueW1jZS5yZW1vdmUodGhpcy5lZGl0b3IpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQgeyB0aGlzLm9uQ2hhbmdlID0gZm47IH1cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG5cbn1cbiJdfQ==