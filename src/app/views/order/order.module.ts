import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from './order-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [OrderFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [OrderRoutingModule],
})
export class OrderModule {}
