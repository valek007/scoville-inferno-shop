import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../core/models/product.model';
import { MOCK_PRODUCTS } from '../core/data/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = '/api/products'; // API base endpoint according to requirements

  /**
   * Retrieves the complete list of products from the catalog
   */
  getProducts(): Observable<Product[]> {
    // Simulate HTTP API response with network latency
    return of(MOCK_PRODUCTS).pipe(delay(300));
    
    // Production API call:
    // return this.http.get<Product[]>(this.apiUrl);
  }

  /**
   * Retrieves a single product by its unique ID
   */
  getProductById(id: string): Observable<Product | undefined> {
    const product = MOCK_PRODUCTS.find(p => p.id === id);
    return of(product).pipe(delay(300));
    
    // Production API call:
    // return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}