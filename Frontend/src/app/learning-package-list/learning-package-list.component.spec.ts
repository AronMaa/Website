import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LearningPackageListComponent} from './learning-package-list.component';

describe('LearningPackageListComponent', () => {
  let component: LearningPackageListComponent;
  let fixture: ComponentFixture<LearningPackageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningPackageListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LearningPackageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
