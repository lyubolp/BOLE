import { TestBed } from '@angular/core/testing';

import { GradesCardService } from './grades-card.service';

describe('GradesCardService', () => {
  let service: GradesCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradesCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
