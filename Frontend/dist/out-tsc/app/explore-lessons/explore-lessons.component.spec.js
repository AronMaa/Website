import {TestBed} from '@angular/core/testing';
import {ExploreLessonsComponent} from './explore-lessons.component';

describe('ExploreLessonsComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreLessonsComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(ExploreLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=explore-lessons.component.spec.js.map
