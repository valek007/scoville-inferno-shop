import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../../core/models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private cartService = inject(CartService);

  cartItems$: Observable<CartItem[]> = this.cartService.cartItems$;

  total$: Observable<number> = this.cartItems$.pipe(
    map(items => items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0))
  );

  incrementQuantity(item: CartItem): void {
    this.cartService.addToCart(item.product, 1);
  }

  decrementQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      this.cartService.addToCart(item.product, -1);
    }
  }

  removeItem(productId: string): void {
    // Remove item logic
  }
}