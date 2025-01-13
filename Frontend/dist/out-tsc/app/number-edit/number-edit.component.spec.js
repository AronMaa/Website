import {TestBed} from '@angular/core/testing';
import {NumberEditComponent} from './number-edit.component';

describe('NumberEditComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberEditComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(NumberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=number-edit.component.spec.js.map
