import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Faq} from './faq';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  faqs: Faq[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getFaqAccordion();
  }

  getFaqAccordion(): any {
    try {
      this.dataService.getFaqs().subscribe(data => {
          console.log('data: ', data);
          this.faqs = data;
        },
        error => {
          console.log('error: ', error);
        });
    } catch (e) {
      console.log(e);
    }
  }
}
