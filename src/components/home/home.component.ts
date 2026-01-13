
import { Component, ChangeDetectionStrategy, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ProductCardComponent } from '../product-card/product-card.component';

type Category = 'All' | 'Books' | 'Attar' | 'Food';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);

  products = this.productService.products;
  categories: Category[] = ['All', 'Books', 'Attar', 'Food'];
  activeCategory = signal<Category>('All');
  
  filteredProducts = computed(() => {
    const category = this.activeCategory();
    if (category === 'All') {
      return this.products();
    }
    return this.products().filter(p => p.category === category);
  });

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  setCategory(category: Category): void {
    this.activeCategory.set(category);
  }
}
