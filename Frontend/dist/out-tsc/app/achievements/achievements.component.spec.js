import {TestBed} from '@angular/core/testing';
import {AchievementsComponent} from './achievements.component';

describe('AchievementsComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=achievements.component.spec.js.map
