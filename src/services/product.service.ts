
import { Injectable, signal } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'Books' | 'Attar' | 'Food';
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private allProducts: Product[] = [
    { id: 1, name: 'Seerah of Prophet Muhammad (PBUH)', price: 25.99, category: 'Books', imageUrl: 'https://picsum.photos/seed/book1/400/300' },
    { id: 2, name: 'Stories of the Prophets', price: 22.50, category: 'Books', imageUrl: 'https://picsum.photos/seed/book2/400/300' },
    { id: 3, name: 'Musk Al Tahara', price: 18.00, category: 'Attar', imageUrl: 'https://picsum.photos/seed/attar1/400/300' },
    { id: 4, name: 'Royal Oudh Perfume Oil', price: 35.00, category: 'Attar', imageUrl: 'https://picsum.photos/seed/attar2/400/300' },
    { id: 5, name: 'Premium Sun-Dried Shutki', price: 15.75, category: 'Food', imageUrl: 'https://picsum.photos/seed/food1/400/300' },
    { id: 6, name: 'Spicy Shutki Bhorta Mix', price: 12.00, category: 'Food', imageUrl: 'https://picsum.photos/seed/food2/400/300' },
    { id: 7, name: 'The Holy Quran with Translation', price: 39.99, category: 'Books', imageUrl: 'https://picsum.photos/seed/book3/400/300' },
    { id: 8, name: 'Amber & Sandalwood Attar', price: 28.50, category: 'Attar', imageUrl: 'https://picsum.photos/seed/attar3/400/300' },
  ];
  
  products = signal<Product[]>(this.allProducts);
}
