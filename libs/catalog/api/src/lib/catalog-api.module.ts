import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogDataAccessModule } from '@e-proc/catalog/domain';

@NgModule({
  imports: [CommonModule, CatalogDataAccessModule]
})
export class CatalogApiModule {}
