import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Faq} from '../../models/faq';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  faqs: Faq[];

  constructor(private dataService: DataService) {
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
