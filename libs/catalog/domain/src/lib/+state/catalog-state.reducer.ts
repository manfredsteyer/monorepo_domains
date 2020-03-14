import { Action, createReducer, on } from '@ngrx/store';
import * as CatalogStateActions from './catalog-state.actions';
import { Product } from '../entities/entities';

export const catalogStateFeatureKey = 'catalogState';

export interface CatalogAppState {
  [catalogStateFeatureKey]: CatalogState;
}

export interface CatalogState {
  products: { [id: number]: Product };
  ids: number[];
}

export const initialState: CatalogState = {
  products: {},
  ids: []
};

const catalogStateReducer = createReducer(
  initialState,

  on(CatalogStateActions.loadProducts, state => state),
  on(CatalogStateActions.loadProductsSuccess, (state, action) => {
    const products = action.products.reduce((acc, p) => ({ ...acc, [p.id]: p  }), {});
    const ids = action.products.reduce((acc, p) => ([...acc, p.id]), []);
    return {...state, products, ids};
  }),
  on(CatalogStateActions.loadProductsFailure, (state, action) => state),

);

export function reducer(state: CatalogState | undefined, action: Action) {
  return catalogStateReducer(state, action);
}
