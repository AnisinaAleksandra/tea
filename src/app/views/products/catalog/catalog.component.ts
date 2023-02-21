import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductListService } from 'src/app/core/services/product-list.service';
import { ProductTeaService } from 'src/app/core/services/product-tea.service';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  public productItemList: any = [];
  constructor(
    public productTeaService: ProductTeaService,
    private productListService: ProductListService
  ) {}
  ngOnInit() {
    this.productListService.getProducts();
    this.productItemList = this.productListService.products;
  }

  public openCardTeaProduct(product: ProductType): void {
    this.productTeaService.productTea = product;
  }
}
