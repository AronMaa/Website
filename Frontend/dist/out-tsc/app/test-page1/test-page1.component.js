import {__decorate} from "tslib";
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NumberDisplayComponent} from '../number-display/number-display.component';
import {NumberStepsComponent} from '../number-steps/number-steps.component';
import {NumberEditComponent} from '../number-edit/number-edit.component';

let TestPage1Component = class TestPage1Component {
  numberValue = 1;

  onClickIncrementValue() {
    this.numberValue++;
  }

  onInputChanged($event) {
    /*console.log('Input changed:', $event);
    const input = $event.target as HTMLInputElement;
    const textValue: string = input.value;
    console.log('input text value:', textValue);
    const numberValue: number = +textValue;
    console.log('input number value:', numberValue);
    this.numberValue = numberValue;*/
    this.numberValue = +$event.target.value;
  }

  onDecr10(value) {
    this.numberValue += value; // Decrement by 10
  }

  onDecr1(value) {
    this.numberValue += value; // Decrement by 1
  }

  onIncr1(value) {
    this.numberValue += value; // Increment by 1
  }

  onIncr10(value) {
    this.numberValue += value; // Increment by 10
  }
};
TestPage1Component = __decorate([
  Component({
    selector: 'app-test-page1',
    standalone: true,
    imports: [
      FormsModule,
      NumberDisplayComponent,
      NumberStepsComponent,
      NumberEditComponent
    ],
    templateUrl: './test-page1.component.html',
    styleUrl: './test-page1.component.css'
  })
], TestPage1Component);
export {TestPage1Component};
//# sourceMappingURL=test-page1.component.js.map
