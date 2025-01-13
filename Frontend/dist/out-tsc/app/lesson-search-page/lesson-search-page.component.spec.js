import {TestBed} from '@angular/core/testing';
import {LessonSearchPageComponent} from './lesson-search-page.component';

describe('LessonSearchPageComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonSearchPageComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(LessonSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=lesson-search-page.component.spec.js.map
