import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShortTextPipe } from './pipes/short-text.pipe';
import { FormatPricePipe } from './pipes/format-price.pipe';

@NgModule({
  declarations: [
    ShortTextPipe,
    FormatPricePipe,
  ],
  imports: [CommonModule, RouterModule],
  exports:[
    ShortTextPipe,
    FormatPricePipe,
  ]
})
export class SharedModule {}
