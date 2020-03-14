import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CatalogStateEffects } from './catalog-state.effects';

describe('CatalogStateEffects', () => {
  let actions$: Observable<any>;
  let effects: CatalogStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CatalogStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CatalogStateEffects>(CatalogStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
