import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { TreeMode } from 'tree-ngx';
var DoTreeComponent = /** @class */ (function () {
    function DoTreeComponent() {
        this.nodeItems = [{}];
        this.options = {
            mode: TreeMode.MultiSelect,
            checkboxes: true,
            alwaysEmitSelected: true
        };
        this.onSelect = new EventEmitter();
    }
    Object.defineProperty(DoTreeComponent.prototype, "nodeItemsFn", {
        set: function (nodeItems) {
            this.nodeItems = nodeItems;
        },
        enumerable: false,
        configurable: true
    });
    DoTreeComponent.prototype.ngOnInit = function () { };
    DoTreeComponent.prototype.onSelectedItems = function (event) {
        this.onSelect.emit(event);
    };
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
    return DoTreeComponent;
}());
export { DoTreeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby1jb21tb24vIiwic291cmNlcyI6WyJsaWIvdHJlZS9kby10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVwQztJQUFBO1FBV2tCLGNBQVMsR0FBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLFlBQU8sR0FBUTtZQUM3QixJQUFJLEVBQUUsUUFBUSxDQUFDLFdBQVc7WUFDMUIsVUFBVSxFQUFFLElBQUk7WUFDaEIsa0JBQWtCLEVBQUUsSUFBSTtTQUN6QixDQUFDO1FBQ1EsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBT2xFLENBQUM7SUFoQkMsc0JBQW9CLHdDQUFXO2FBQS9CLFVBQWdDLFNBQWM7WUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFTRCxrQ0FBUSxHQUFSLGNBQWtCLENBQUM7SUFFbkIseUNBQWUsR0FBZixVQUFnQixLQUFVO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLHNKQUF1QztvQkFFdkMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs4QkFFRSxLQUFLOzRCQUdMLEtBQUs7MEJBQ0wsS0FBSzsyQkFLTCxNQUFNOztJQU9ULHNCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FqQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlTW9kZSB9IGZyb20gJ3RyZWUtbmd4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tdHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kby10cmVlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG8tdHJlZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRG9UcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHVibGljIHNldCBub2RlSXRlbXNGbihub2RlSXRlbXM6IGFueSkge1xuICAgIHRoaXMubm9kZUl0ZW1zID0gbm9kZUl0ZW1zO1xuICB9XG4gIEBJbnB1dCgpIHB1YmxpYyBub2RlSXRlbXM6IGFueSA9IFt7fV07XG4gIEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zOiBhbnkgPSB7XG4gICAgbW9kZTogVHJlZU1vZGUuTXVsdGlTZWxlY3QsXG4gICAgY2hlY2tib3hlczogdHJ1ZSxcbiAgICBhbHdheXNFbWl0U2VsZWN0ZWQ6IHRydWVcbiAgfTtcbiAgQE91dHB1dCgpIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBvblNlbGVjdGVkSXRlbXMoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMub25TZWxlY3QuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==