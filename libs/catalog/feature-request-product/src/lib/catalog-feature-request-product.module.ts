import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogDataAccessModule } from '@e-proc/catalog/domain';

@NgModule({
  imports: [
    CommonModule,
    CatalogDataAccessModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class CatalogFeatureRequestProductModule {}
