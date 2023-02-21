import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',
children:[
  {path:'', loadChildren:()=> import('./views/main/main.module').then((m) => m.MainModule)},
  {path:'order', loadChildren:()=> import('./views/order/order.module').then((m) => m.OrderModule)},
  {path:'product', loadChildren:()=> import('./views/products/catalog-teas.module').then((m) => m.CatalogTeasModule)},
]}, 
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
