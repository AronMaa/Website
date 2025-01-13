import {TestBed} from '@angular/core/testing';
import {GlossaryComponent} from './glossary.component';

describe('GlossaryComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlossaryComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(GlossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=glossary.component.spec.js.map
