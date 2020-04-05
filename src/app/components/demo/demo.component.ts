import { Component, OnInit } from '@angular/core';
import { Product } from './../../product.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'Store';

  items = ['Cristian', 'Alveiro', 'Olga'];

  power = 10;

  addItem() {
    this.items.push('nuevo item');
  }
  /*
   deleteItem(index : number) {
     this.items.splice(index, 1)
   }*/

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

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

}
