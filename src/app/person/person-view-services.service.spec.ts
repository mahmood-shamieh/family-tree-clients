import { TestBed } from '@angular/core/testing';

import { PersonViewServicesService } from './person-view-services.service';

describe('PersonViewServicesService', () => {
  let service: PersonViewServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonViewServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
