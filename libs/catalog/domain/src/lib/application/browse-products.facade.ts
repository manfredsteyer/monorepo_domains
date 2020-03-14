import { Injectable } from '@angular/core';
import { ProductService } from '../infrastructure/product.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../entities/entities';

@Injectable({ providedIn: 'root'})
export class BrowseProductsFacade {
    
    private productsSubject = new BehaviorSubject<Product[]>([]);
    public products$ = this.productsSubject.asObservable();

    constructor(private productService: ProductService) { }

    load(): void {
        this.productService.loadProducts().subscribe(
            products => this.productsSubject.next(products),
            err => console.error('err', err)
        );
    }
}
