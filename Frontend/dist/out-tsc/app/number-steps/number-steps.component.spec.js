import {TestBed} from '@angular/core/testing';
import {NumberStepsComponent} from './number-steps.component';

describe('NumberStepsComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberStepsComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(NumberStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=number-steps.component.spec.js.map
