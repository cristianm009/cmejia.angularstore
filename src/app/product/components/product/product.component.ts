import {
    Component, Input, Output, EventEmitter,
    OnChanges, SimpleChange, OnInit, DoCheck, OnDestroy
} from '@angular/core';

import { Product } from '../../../core/models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

//componets
/*
export class ProductComponent {
    product: Product = {
        id: '1',
        image: 'assets/images/TShirt.jpg',
        title: 'TShirt',
        price: 15,
        description: 'Yellow T-Shirt'
    }
}*/
//input
export class ProductComponent implements /*OnChanges,*/ OnInit, DoCheck, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter(true);

    today = new Date();

    //<Life cicle>
    constructor() {
        console.log('1. constructor');
    }

    /*ngOnChanges(changes: SimpleChange) {
        console.log('2. ngOnChanges');
        console.log(changes);
    }*/

    ngOnInit() {
        console.log('3. ngOnInit');
    }

    //Not compatible with ngOnChanges because both detect changes, you need to use one of them
    ngDoCheck() {
        console.log('4. ngDoCheck');
    }

    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }
    //</life cicle>

    addCart() {
        console.log('product added');
        this.productClicked.emit(this.product.id);
    }
}