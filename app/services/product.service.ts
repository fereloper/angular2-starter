import { Injectable } from '@angular/core';

import { PRODUCTS } from './../mocks/mock-products';
@Injectable()
export class ProductService {
    getProducts() {
        return Promise.resolve(PRODUCTS);
    }
}