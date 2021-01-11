import { Pipe } from '@angular/core';
var NumberWithCommasPipe = /** @class */ (function () {
    function NumberWithCommasPipe() {
    }
    NumberWithCommasPipe.prototype.transform = function (input) {
        return new Intl.NumberFormat().format(input);
    };
    NumberWithCommasPipe.decorators = [
        { type: Pipe, args: [{ name: 'ngxNumberWithCommas' },] }
    ];
    return NumberWithCommasPipe;
}());
export { NumberWithCommasPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXdpdGgtY29tbWFzLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZG9uZ2thcC9kby10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9udW1iZXItd2l0aC1jb21tYXMucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBTUEsQ0FBQztJQUhDLHdDQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3JCLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQUxGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTs7SUFNckMsMkJBQUM7Q0FBQSxBQU5ELElBTUM7U0FMWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgbmFtZTogJ25neE51bWJlcldpdGhDb21tYXMnIH0pXG5leHBvcnQgY2xhc3MgTnVtYmVyV2l0aENvbW1hc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0oaW5wdXQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCgpLmZvcm1hdChpbnB1dCk7XG4gIH1cbn1cbiJdfQ==