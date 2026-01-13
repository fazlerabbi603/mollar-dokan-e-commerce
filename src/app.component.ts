
import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, HomeComponent, CartComponent],
})
export class AppComponent {
  cartService = inject(CartService);
  activeView = signal<'home' | 'cart' | 'profile'>('home');
  isCartOpen = signal(false);

  openCart(): void {
    this.isCartOpen.set(true);
  }

  closeCart(): void {
    this.isCartOpen.set(false);
  }

  // Placeholder for future navigation
  changeView(view: 'home' | 'cart' | 'profile'): void {
    if (view === 'cart') {
      this.openCart();
    } else {
      this.activeView.set(view);
    }
  }
}
