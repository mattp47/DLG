import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion.component';

@NgModule({
  imports: [
    CommonModule,
    AccordionRoutingModule,
    SharedModule
  ],
  declarations: [AccordionComponent]
})
export class AccordionModule {}
