import { Injectable } from '@angular/core';
import { ProductType } from '../../../types/product.type';
import { HttpClient } from '@angular/common/http';

@Injectable()
// {providedIn: 'root',}
export class ProductListService {
  public choosenProduct: ProductType | undefined = {} as
    | ProductType
    | undefined;
  public products: ProductType[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }
  getProducts() {
    return this.http
      .get<ProductType[]>('https://testologia.site/tea ')
      .subscribe((data: any) => {
        this.products = data;
      });
  }

  getProduct(id: number): ProductType | undefined {
    if (this.products.find((item) => item.id === id)) {
      this.choosenProduct = this.products.find((item) => item.id === id);
      localStorage.setItem(
        'choosenProductTitle',
        `${this.choosenProduct?.title}`
      );
    }
    return this.choosenProduct;
  }

  sendOrder(data: any) {
    return this.http.post<{ success: number; message: string }>(
      'https://testologia.site/order-tea',
      data
    );
  }
}
