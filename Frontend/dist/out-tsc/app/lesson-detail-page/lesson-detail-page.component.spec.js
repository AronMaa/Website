import {TestBed} from '@angular/core/testing';
import {LessonDetailPageComponent} from './lesson-detail-page.component';

describe('LessonDetailPageComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonDetailPageComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(LessonDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=lesson-detail-page.component.spec.js.map
