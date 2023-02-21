import { Component } from '@angular/core';
import { ProductTeaService } from './core/services/product-tea.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-tea-progect';
  constructor(public productTea: ProductTeaService) {}
}
