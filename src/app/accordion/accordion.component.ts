import {Component, OnInit} from '@angular/core';
import {AccordionService} from './shared/accordion.service';
import {Faq} from './shared/faq';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  faqs: Faq[];

  constructor(private dataService: AccordionService) {
  }

  public ngOnInit(): void {
    this.getFaqAccordion();
  }

  public getFaqAccordion(): any {
    this.dataService.getFaqs().subscribe(data => {
      this.faqs = data;
    });
  }
}
