import {Component, Input, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-number-edit',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: '<input [(ngModel)]="value" (ngModelChange)="onInputChange()">',
  styleUrl: './number-edit.component.css'

})
export class NumberEditComponent {
  @Input() value: number = 0; // Input value from parent
  @Output() valueChange = new Subject<number>(); // Output event to notify parent of change

  onInputChange() {
    this.valueChange.next(this.value); // Emit the new value whenever the input changes
  }
}
