import {TestBed} from '@angular/core/testing';
import {LessonListPageComponent} from './lesson-list-page.component';

describe('LessonListPageComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonListPageComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(LessonListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=lesson-list-page.component.spec.js.map
