import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from 'src/app/core/services/product-list.service';
import { ProductTeaService } from 'src/app/core/services/product-tea.service';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'product-card-component',
  templateUrl: './productCard.component.html',
  styleUrls: ['./productCard.component.css'],
})
export class ProductCardComponent implements OnInit {
  productTea: ProductType = {} as ProductType;
  constructor(
    public productTeaService: ProductTeaService,
    private activatedRoute: ActivatedRoute,
    private productList: ProductListService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        const resultProduct = this.productList.getProduct(+params['id']);
        if (resultProduct) {
          this.productTea = resultProduct;
        } else {
          this.router.navigate(['/']);
        }
      }
    });
  }
}
