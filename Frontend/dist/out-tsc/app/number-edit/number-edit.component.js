import {__decorate} from "tslib";
import {Component, Input, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {FormsModule} from '@angular/forms';

let NumberEditComponent = class NumberEditComponent {
  value = 0; // Input value from parent
  valueChange = new Subject(); // Output event to notify parent of change
  onInputChange() {
    this.valueChange.next(this.value); // Emit the new value whenever the input changes
  }
};
__decorate([
  Input()
], NumberEditComponent.prototype, "value", void 0);
__decorate([
  Output()
], NumberEditComponent.prototype, "valueChange", void 0);
NumberEditComponent = __decorate([
  Component({
    selector: 'app-number-edit',
    standalone: true,
    imports: [
      FormsModule
    ],
    template: '<input [(ngModel)]="value" (ngModelChange)="onInputChange()">',
    styleUrl: './number-edit.component.css'
  })
], NumberEditComponent);
export {NumberEditComponent};
//# sourceMappingURL=number-edit.component.js.map
