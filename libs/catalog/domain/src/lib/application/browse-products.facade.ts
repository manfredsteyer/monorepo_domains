import { Injectable } from '@angular/core';
import { CatalogAppState } from '../+state/catalog-state.reducer';
import { Store } from '@ngrx/store';
import { selectProducts } from '../+state/catalog-state.selectors';
import { loadProducts } from '../+state/catalog-state.actions';

@Injectable({ providedIn: 'root'})
export class BrowseProductsFacade {
    
    products$ = this.store.select(selectProducts);
    
    constructor(private store: Store<CatalogAppState>) { }

    load(): void {
        this.store.dispatch(loadProducts());
    }

}