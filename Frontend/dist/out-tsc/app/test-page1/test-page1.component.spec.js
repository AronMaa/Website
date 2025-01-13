import {TestBed} from '@angular/core/testing';
import {TestPage1Component} from './test-page1.component';

describe('TestPage1Component', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPage1Component]
    })
      .compileComponents();
    fixture = TestBed.createComponent(TestPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=test-page1.component.spec.js.map
