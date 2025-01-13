import {TestBed} from '@angular/core/testing';
import {UserSettingsService} from './user-settings.service';

describe('UserSettingsService', () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSettingsService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=user-settings.service.spec.js.map
