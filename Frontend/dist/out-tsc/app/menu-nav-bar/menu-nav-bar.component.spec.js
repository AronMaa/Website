import {TestBed} from '@angular/core/testing';
import {MenuNavBarComponent} from './menu-nav-bar.component';

describe('MenuNavBarComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuNavBarComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(MenuNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=menu-nav-bar.component.spec.js.map
