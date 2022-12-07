import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ListProductComponent } from './components/list-product/list-product.component';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CoreModule
  ]
})
export class ProductsModule { }
