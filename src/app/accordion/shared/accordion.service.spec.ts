import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AccordionService} from './accordion.service';

describe('DataService', () => {
  let service: AccordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AccordionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
