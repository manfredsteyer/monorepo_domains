import { async, TestBed } from '@angular/core/testing';
import { CatalogDataAccessModule } from './catalog-data-access.module';

describe('CatalogDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CatalogDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CatalogDataAccessModule).toBeDefined();
  });
});
