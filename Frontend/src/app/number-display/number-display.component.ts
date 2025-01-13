import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-number-display',
  standalone: true,
  imports: [],
  styleUrl: './number-display.component.css',
  template: '<div>Display value component: {{value}}</div>'
})
export class NumberDisplayComponent {
  @Input()
  value: number = 0;

}
