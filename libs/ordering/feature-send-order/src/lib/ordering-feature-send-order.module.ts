import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogApiModule } from '@e-proc/catalog/api';
import { SharedUiAddressModule } from '@e-proc/shared/ui-address';
import { OrderingDomainModule } from '@e-proc/ordering/domain';

@NgModule({
  imports: [
    CommonModule,
    CatalogApiModule,
    OrderingDomainModule,
    SharedUiAddressModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class OrderingFeatureSendOrderModule {}
