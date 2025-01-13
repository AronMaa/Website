import {__decorate} from "tslib";
import {Component, Output} from '@angular/core';
import {Subject} from 'rxjs';

let NumberStepsComponent = class NumberStepsComponent {
  decr10 = new Subject();
  decr1 = new Subject();
  incr1 = new Subject();
  incr10 = new Subject();

  onClickDecr10() {
    this.decr10.next(-10); // Emit -10 when the -10 button is clicked
  }

  onClickDecr1() {
    this.decr1.next(-1); // Emit -1 when the -1 button is clicked
  }

  onClickIncr1() {
    this.incr1.next(1); // Emit +1 when the +1 button is clicked
  }

  onClickIncr10() {
    this.incr10.next(10); // Emit +10 when the +10 button is clicked
  }
};
__decorate([
  Output()
], NumberStepsComponent.prototype, "decr10", void 0);
__decorate([
  Output()
], NumberStepsComponent.prototype, "decr1", void 0);
__decorate([
  Output()
], NumberStepsComponent.prototype, "incr1", void 0);
__decorate([
  Output()
], NumberStepsComponent.prototype, "incr10", void 0);
NumberStepsComponent = __decorate([
  Component({
    selector: 'app-number-steps',
    standalone: true,
    imports: [],
    templateUrl: './number-steps.component.html',
    styleUrl: './number-steps.component.css'
  })
], NumberStepsComponent);
export {NumberStepsComponent};
//# sourceMappingURL=number-steps.component.js.map
