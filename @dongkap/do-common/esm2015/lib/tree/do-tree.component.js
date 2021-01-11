import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { TreeMode } from 'tree-ngx';
export class DoTreeComponent {
    constructor() {
        this.nodeItems = [{}];
        this.options = {
            mode: TreeMode.MultiSelect,
            checkboxes: true,
            alwaysEmitSelected: true
        };
        this.onSelect = new EventEmitter();
    }
    set nodeItemsFn(nodeItems) {
        this.nodeItems = nodeItems;
    }
    ngOnInit() { }
    onSelectedItems(event) {
        this.onSelect.emit(event);
    }
}
DoTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'do-tree',
                template: "<tree-ngx\n  (selectedItems)=\"onSelectedItems($event)\"\n  [nodeItems]=\"nodeItems\"\n  [options]=\"options\"\n  #treengx>\n</tree-ngx>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".tree-ngx{display:flex;flex:1 1 auto;flex-direction:column;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}.node{display:flex;flex:1 1 auto;flex-direction:column}.node-children{display:flex;flex:1 1 auto}.node-name{display:inline-block;padding:5px 0 5px 7px}.node-name.markSelected{padding:5px 0 5px 2px;border-left:5px solid #269}.node-name .active{cursor:pointer}.node-offset{display:flex;margin-left:20px}.node-icon-wrapper{position:relative;display:inline-block;width:25px;height:17px;top:1px;left:6px}.node-icon-wrapper.disabled{cursor:default}.collapsable{cursor:pointer}.node-container{display:inline-block}.nodeDisabled{opacity:.6}.node-checkbox:disabled{cursor:auto}.collapsible-wrapper{display:flex;overflow:hidden}.collapsible-wrapper:after{content:'';height:25px;transition:height .3s linear,max-height linear .3s;max-height:0}.collapsible{transition:margin-bottom .3s cubic-bezier(0,0,0,1);margin-bottom:0;max-height:1000000px}.collapsible-wrapper.collapsed>.collapsible{margin-bottom:-20000px;transition:margin-bottom .3s cubic-bezier(1,0,1,1),visibility .3s,max-height .3s;visibility:hidden;max-height:0}.collapsible-wrapper.collapsed:after{height:0;transition:height .3s linear;max-height:25px}.arrow-down{position:absolute;width:0;height:0;left:3px;top:6px;border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #455a64}.arrow-down.collapse-empty{border-top:7px solid #ccc}.arrow-right{position:absolute;width:0;height:0;left:8px;top:3px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:7px solid #455a64}.node-checkbox{display:inline-block;position:relative;padding:0;top:3px;left:5px;width:1.25rem;height:1.25rem;margin:0 .25rem;cursor:pointer}"]
            },] }
];
DoTreeComponent.propDecorators = {
    nodeItemsFn: [{ type: Input }],
    nodeItems: [{ type: Input }],
    options: [{ type: Input }],
    onSelect: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvdHJlZS9kby10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVNwQyxNQUFNLE9BQU8sZUFBZTtJQVA1QjtRQVdrQixjQUFTLEdBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixZQUFPLEdBQVE7WUFDN0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxXQUFXO1lBQzFCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGtCQUFrQixFQUFFLElBQUk7U0FDekIsQ0FBQztRQUNRLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQU9sRSxDQUFDO0lBaEJDLElBQW9CLFdBQVcsQ0FBQyxTQUFjO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFTRCxRQUFRLEtBQVUsQ0FBQztJQUVuQixlQUFlLENBQUMsS0FBVTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixzSkFBdUM7Z0JBRXZDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OzswQkFFRSxLQUFLO3dCQUdMLEtBQUs7c0JBQ0wsS0FBSzt1QkFLTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVNb2RlIH0gZnJvbSAndHJlZS1uZ3gnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkby10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RvLXRyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kby10cmVlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBEb1RyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgc2V0IG5vZGVJdGVtc0ZuKG5vZGVJdGVtczogYW55KSB7XG4gICAgdGhpcy5ub2RlSXRlbXMgPSBub2RlSXRlbXM7XG4gIH1cbiAgQElucHV0KCkgcHVibGljIG5vZGVJdGVtczogYW55ID0gW3t9XTtcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnM6IGFueSA9IHtcbiAgICBtb2RlOiBUcmVlTW9kZS5NdWx0aVNlbGVjdCxcbiAgICBjaGVja2JveGVzOiB0cnVlLFxuICAgIGFsd2F5c0VtaXRTZWxlY3RlZDogdHJ1ZVxuICB9O1xuICBAT3V0cHV0KCkgb25TZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxuXG4gIG9uU2VsZWN0ZWRJdGVtcyhldmVudDogYW55KSB7XG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19