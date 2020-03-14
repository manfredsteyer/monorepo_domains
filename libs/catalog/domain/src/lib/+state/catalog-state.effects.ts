import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as CatalogStateActions from './catalog-state.actions';
import { ProductService } from '../infrastructure/product.service';

@Injectable()
export class CatalogStateEffects {

  loadCatalogStates$ = createEffect(() => this.actions$.pipe(
    ofType(CatalogStateActions.loadProducts),
    switchMap(() =>
      this.productService.loadProducts().pipe(
        map(products => CatalogStateActions.loadProductsSuccess({ products })),
        catchError(error => of(CatalogStateActions.loadProductsFailure({ error }))))
    )
  ));

  constructor(
    private productService: ProductService, 
    private actions$: Actions) {}

}
