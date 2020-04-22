import { TestBed } from '@angular/core/testing';

import { HomeworkCardService } from './homework-card.service';

describe('HomeworkCardService', () => {
  let service: HomeworkCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeworkCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
