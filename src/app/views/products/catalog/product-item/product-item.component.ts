import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() productItem: ProductType = {} as ProductType;
  @Output() openCardTeaEvent: EventEmitter<ProductType> =
    new EventEmitter<ProductType>();
  constructor(public router: Router) {}

  public openCardTea() {
    this.openCardTeaEvent.emit(this.productItem);
    // this.router.navigate(['/product'])
  }
}
