import * as fromCatalogState from './catalog-state.reducer';
import { selectCatalogStateState } from './catalog-state.selectors';

describe('CatalogState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCatalogStateState({
      [fromCatalogState.catalogStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
