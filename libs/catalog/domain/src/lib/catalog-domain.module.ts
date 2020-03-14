import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUtilAuthModule } from '@e-proc/shared/util-auth';
import { StoreModule } from '@ngrx/store';
import * as fromCatalogState from './+state/catalog-state.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CatalogStateEffects } from './+state/catalog-state.effects';

@NgModule({
  imports: [CommonModule, SharedUtilAuthModule, StoreModule.forFeature(fromCatalogState.catalogStateFeatureKey, fromCatalogState.reducer), EffectsModule.forFeature([CatalogStateEffects])]
})
export class CatalogDomainModule {}
