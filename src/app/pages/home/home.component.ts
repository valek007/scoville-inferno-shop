import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

// Correct relative import path:
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  // Observable stream consumed via async pipe in template
  products$!: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}