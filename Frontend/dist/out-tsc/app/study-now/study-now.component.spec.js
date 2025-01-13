import {TestBed} from '@angular/core/testing';
import {StudyNowComponent} from './study-now.component';

describe('StudyNowComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyNowComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(StudyNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=study-now.component.spec.js.map
