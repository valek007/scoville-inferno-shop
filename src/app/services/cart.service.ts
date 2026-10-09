import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../core/models/cart.model';
import { Product } from '../core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Reactive state management for shopping cart using BehaviorSubject
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

  /**
   * Add product to cart or increment quantity if already present
   */
  addToCart(product: Product, quantity: number = 1): void {
    const currentItems = [...this.cartItemsSubject.value];
    const existingIndex = currentItems.findIndex(item => item.product.id === product.id);

    if (existingIndex > -1) {
      const newQuantity = currentItems[existingIndex].quantity + quantity;
      if (newQuantity <= 0) {
        currentItems.splice(existingIndex, 1);
      } else {
        currentItems[existingIndex].quantity = newQuantity;
      }
    } else if (quantity > 0) {
      currentItems.push({ product, quantity });
    }

    this.cartItemsSubject.next(currentItems);
  }

  /**
   * Clears all items in the shopping cart
   */
  clearCart(): void {
    this.cartItemsSubject.next([]);
  }

  /**
   * Returns current snapshot of cart items
   */
  getCartItems(): CartItem[] {
    return this.cartItemsSubject.value;
  }
}