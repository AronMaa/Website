import {TestBed} from '@angular/core/testing';
import {ImportComponent} from './import.component';

describe('ImportComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(ImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=import.component.spec.js.map
