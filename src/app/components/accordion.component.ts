import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { Faq } from './faq';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AccordionComponent implements OnInit {

  // faqs: any = [];
  faqs: Faq[];

  constructor(
    private dataService: DataService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'plus_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/plus-icon.svg')
    );
  }

  ngOnInit(): void {
    this.getFaqAccordion();
  }

  /* method to call get-api from app.service */
  getFaqAccordion(): any {
    try {
      this.dataService.getFaqs().subscribe(data => {
          console.log('data: ', data );
          this.faqs = data;
        },
        error => {
          console.log('error: ', error);
        });
    } catch (e) {
      console.log(e);
    }
  }

  /* faqsAccordion(): any {
    this.dataservice.getFaqs().subscribe(data => {
      console.log('Component data: ' + JSON.stringify(data));
      this.faqs = data;
    });
  } */

}
