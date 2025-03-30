import { Component, input } from '@angular/core';
import { Product } from '../../../model/product.type';

@Component({
  selector: 'app-product-list-item',
  imports: [],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css',
})
export class ProductListItemComponent {
  product = input(<Product>{});
}
