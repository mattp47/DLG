import {ComponentFixture, TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {DataService} from '../services/data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Observable, of} from 'rxjs';

import {AccordionComponent} from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let httpTestingController: HttpTestingController;

  const dummyFaqs = [{
    id: '1',
    question: 'What vehicles are covered?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }];

  const mockApiService = {
    getFaqs(): any {
      return of(dummyFaqs);
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionComponent],
      imports: [
        HttpClientTestingModule,
        MatExpansionModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: DataService, useValue: mockApiService}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('HAVE A QUESTION? WE CAN HELP');
  });

  it('should get service', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should use faqs from the service', () => {
    const dataService = fixture.debugElement.injector.get(DataService);
    dataService.getFaqs().subscribe(data => {
      expect(data).toEqual([{
        id: '1',
        question: 'What vehicles are covered?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }]);
    });
  });

});
