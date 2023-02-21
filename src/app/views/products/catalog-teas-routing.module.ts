import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductCardComponent } from 'src/app/views/products/shared/productCard/productCard.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: ':id', component: ProductCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogTeasRoutingModule {}
