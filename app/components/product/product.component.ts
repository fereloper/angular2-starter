import { Component, Input } from '@angular/core';

@Component ({
    selector: 'product',
    templateUrl: 'app/components/product/product.component.html'
})

export class ProductComponent {
    @Input() productItem;
}