import { async, TestBed } from '@angular/core/testing';
import { OrderingDomainModule } from './ordering-domain.module';

describe('OrderingDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OrderingDomainModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OrderingDomainModule).toBeDefined();
  });
});
