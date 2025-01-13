import {TestBed} from '@angular/core/testing';
import {NumberDisplayComponent} from './number-display.component';

describe('NumberDisplayComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberDisplayComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(NumberDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=number-display.component.spec.js.map
