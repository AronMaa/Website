import {TestBed} from '@angular/core/testing';
import {LessonEditFormComponent} from './lesson-edit-form.component';

describe('LessonEditFormComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonEditFormComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(LessonEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=lesson-edit-form.component.spec.js.map
