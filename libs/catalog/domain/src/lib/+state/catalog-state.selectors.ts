import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCatalogState from './catalog-state.reducer';

export const selectCatalogStateState = createFeatureSelector<fromCatalogState.CatalogState>(
  fromCatalogState.catalogStateFeatureKey
);

export const selectProducts = createSelector(
  createSelector(selectCatalogStateState, s => s.products),
  createSelector(selectCatalogStateState, s => s.ids),
  (products, ids) => ids.map(id => products[id])
);