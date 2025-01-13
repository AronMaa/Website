import {TestBed} from '@angular/core/testing';
import {DocumentationComponent} from './documentation.component';

describe('DocumentationComponent', () => {
  let component;
  let fixture;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentationComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(DocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=documentation.component.spec.js.map
