import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../../core/models/cart.model';
import { CartService } from '../../services/cart.service';

interface ShippingForm {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  private cartService = inject(CartService);
  private router = inject(Router);

  cartItems$: Observable<CartItem[]> = this.cartService.cartItems$;

  total$: Observable<number> = this.cartItems$.pipe(
    map(items => items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0))
  );

  // Form model
  formData: ShippingForm = {
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  };

  // State flags
  isProcessing: boolean = false;
  orderCompleted: boolean = false;
  orderId: string = '';

  ngOnInit(): void {
    // Redirect to home if cart is empty
    if (this.cartService.getCartItems().length === 0) {
      this.router.navigate(['/']);
    }
  }

  /**
   * Formats credit card number into 4-digit groups (e.g. "1234 5678 9012 3456")
   */
  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    // Strip non-digit characters
    let rawValue = input.value.replace(/\D/g, '');
    // Limit to 16 digits max
    rawValue = rawValue.substring(0, 16);
    
    // Group into 4 digits with spaces
    const formatted = rawValue.match(/.{1,4}/g)?.join(' ') || rawValue;
    this.formData.cardNumber = formatted;
    input.value = formatted;
  }

  /**
   * Formats card expiry date into MM/YY format (e.g. "12/28")
   */
  formatCardExpiry(event: Event): void {
    const input = event.target as HTMLInputElement;
    // Strip non-digit characters
    let rawValue = input.value.replace(/\D/g, '');
    // Limit to 4 digits max (MMYY)
    rawValue = rawValue.substring(0, 4);

    // Insert slash after 2 digits
    if (rawValue.length > 2) {
      this.formData.cardExpiry = `${rawValue.substring(0, 2)}/${rawValue.substring(2)}`;
    } else {
      this.formData.cardExpiry = rawValue;
    }
    input.value = this.formData.cardExpiry;
  }

  /**
   * Simulates payment processing and completes order
   */
  onSubmitOrder(): void {
    this.isProcessing = true;

    // Simulate payment gateway delay
    setTimeout(() => {
      this.isProcessing = false;
      this.orderCompleted = true;
      this.orderId = 'SCOVILLE-' + Math.floor(100000 + Math.random() * 900000);
      
      // Empty the shopping cart
      this.cartService.clearCart();
    }, 2000);
  }
}