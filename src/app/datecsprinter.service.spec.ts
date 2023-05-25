import { TestBed } from '@angular/core/testing';

import { DatecsprinterService } from './datecsprinter.service';

describe('DatecsprinterService', () => {
  let service: DatecsprinterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatecsprinterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
