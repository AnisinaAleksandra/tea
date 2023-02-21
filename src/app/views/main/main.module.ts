import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { NgbdAccordionPreventchange } from './accordion-component/accordion-preventchange.component';

@NgModule({
  declarations: [MainComponent ],
  imports: [CommonModule, RouterModule, NgbdAccordionPreventchange],
  exports: [MainRoutingModule],
})
export class MainModule {}
