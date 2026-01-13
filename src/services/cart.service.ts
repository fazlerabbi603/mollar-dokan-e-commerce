
import { Injectable, signal, computed } from '@angular/core';
import { Product } from './product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = signal<CartItem[]>([]);

  cartCount = computed(() => this.items().reduce((acc, item) => acc + item.quantity, 0));
  
  cartTotal = computed(() => this.items().reduce((acc, item) => acc + item.product.price * item.quantity, 0));

  addToCart(product: Product): void {
    this.items.update(currentItems => {
      const existingItem = currentItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return currentItems.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...currentItems, { product, quantity: 1 }];
    });
  }

  removeFromCart(productId: number): void {
    this.items.update(currentItems => currentItems.filter(item => item.product.id !== productId));
  }

  updateQuantity(productId: number, newQuantity: number): void {
    if (newQuantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this.items.update(currentItems => 
      currentItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  }
}
