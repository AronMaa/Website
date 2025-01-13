import {TestBed} from '@angular/core/testing';
import {NewComponent} from './new.component';

describe('NewComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=new.component.spec.js.map
