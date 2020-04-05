import { Component, OnInit } from '@angular/core';
import { Product } from './../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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

  ngOnInit() {
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
