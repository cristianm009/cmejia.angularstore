import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/TShirt.jpg',
      title: 'TShirt',
      price: 15,
      description: 'Yellow T-Shirt'
    },
    {
      id: '2',
      image: 'assets/images/Short.jpg',
      title: 'Short',
      price: 20,
      description: 'Blue Short'
    },
    {
      id: '3',
      image: 'assets/images/Shoes.jpg',
      title: 'Shoes',
      price: 100,
      description: 'Red Shoes'
    }
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
