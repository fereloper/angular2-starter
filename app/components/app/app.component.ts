import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductComponent } from './../product/product.component';

import { ProductService } from './../../services/product.service';

@Component({
    selector: 'starter-app', // DOM selector name
    templateUrl: 'app/components/app/app.component.html', //Place your template url of this component
    styleUrls:['app/components/app/app.component.css'], //Place your style urls of this component
    directives: [ProductComponent], //Inject a component as sub component
    providers: [ProductService] 
})

export class AppComponent implements OnInit {
    private products;
    constructor(private productService: ProductService){}
    ngOnInit() {
        this.getPoducts();
    }

    getPoducts() {
        this.products = this.productService.getProducts();
    }
}