import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../models/product.model';
import { from } from 'rxjs';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /*products: Product[] = [
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
  ];*/

  constructor(private http: HttpClient) {
  }

  getAllProducts() {
    //return this.products;
    return this.http.get<Product[]>(`${environment.url_api}/products/`);
  }

  getProduct(id: string) {
    //return this.products.find(item => id === item.id);
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products/`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
