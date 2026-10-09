import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  // Observable holding product detailed information
  product$!: Observable<Product | undefined>;

  // User selected quantity
  quantity: number = 1;

  // Notification feedback state
  addedToCartMessage: boolean = false;

  ngOnInit(): void {
    // Fetch product details based on route parameter 'id'
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id') || '';
        return this.productService.getProductById(id);
      })
    );
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  /**
   * Adds the product to cart and shows temporary confirmation feedback
   */
  onAddToCart(product: Product): void {
    this.cartService.addToCart(product, this.quantity);
    this.addedToCartMessage = true;

    setTimeout(() => {
      this.addedToCartMessage = false;
    }, 3000);
  }

  /**
   * Adds product to cart and immediately navigates to checkout/cart page
   */
  onBuyNow(product: Product): void {
    this.cartService.addToCart(product, this.quantity);
    this.router.navigate(['/cart']);
  }
}