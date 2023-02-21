import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogComponent } from './catalog/catalog.component';
import { ProductItemComponent } from './catalog/product-item/product-item.component';
import { ProductCardComponent } from './shared/productCard/productCard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatalogTeasRoutingModule } from './catalog-teas-routing.module';

@NgModule({
  declarations: [
    CatalogComponent,
    ProductItemComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports:[CatalogTeasRoutingModule]
})
export class CatalogTeasModule {}
