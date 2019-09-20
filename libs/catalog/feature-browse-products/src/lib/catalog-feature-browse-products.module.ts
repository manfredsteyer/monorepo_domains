import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CatalogDomainModule } from '@e-proc/catalog/domain';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogDomainModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ],
  declarations: [
    ProductsComponent
  ],
  exports: [
    ProductsComponent
  ]
})
export class CatalogFeatureBrowseProductsModule {}
