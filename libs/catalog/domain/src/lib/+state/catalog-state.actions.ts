import { createAction, props } from '@ngrx/store';
import { Product } from '../entities/entities';

export const loadProducts = createAction(
  '[CatalogState] loadProducts'
);

export const loadProductsSuccess = createAction(
  '[CatalogState] loadProductsSuccess',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[CatalogState] loadProductsFailure',
  props<{ error: any }>()
);
