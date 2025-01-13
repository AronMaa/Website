import {__decorate} from "tslib";
import {Component, Input} from '@angular/core';

let NumberDisplayComponent = class NumberDisplayComponent {
  value = 0;
};
__decorate([
  Input()
], NumberDisplayComponent.prototype, "value", void 0);
NumberDisplayComponent = __decorate([
  Component({
    selector: 'app-number-display',
    standalone: true,
    imports: [],
    styleUrl: './number-display.component.css',
    template: '<div>Display value component: {{value}}</div>'
  })
], NumberDisplayComponent);
export {NumberDisplayComponent};
//# sourceMappingURL=number-display.component.js.map
