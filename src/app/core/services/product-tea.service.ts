import { Injectable } from '@angular/core';
import { ProductType } from '../../../types/product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductTeaService {
  productTea: ProductType = {} as ProductType;
  constructor() {}
}
