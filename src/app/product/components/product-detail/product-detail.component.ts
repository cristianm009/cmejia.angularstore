import { Component, OnInit } from '@angular/core';
import { ActivatedRoute/*dependency injection*/, Params/*Type*/ } from '@angular/router';

import { Product } from '../../../core/models/product.model';

import { ProductsService } from '../../../core/services/products/products.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      //  console.log(params);
      const id = params.id;
      //console.log(id);
      this.fetchProduct(id);
      //console.log(this.product);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
      .subscribe(product => {
        this.product = product;
      });
  }

  createProduct() {
    const newProduct: Product = {
      description: 'Product',
      id: '11111',
      image: 'assets/images/stickers2.png',
      price: 2000,
      title: 'New Product'
    };
    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  updateProduct() {
    const editedProduct: Partial<Product> = {
      description: 'Product edit',
      title: 'New Product edt'
    };
    this.productsService.updateProduct('1', editedProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('11111')
      .subscribe(rta => {
        console.log(rta);
      });
  }
}
