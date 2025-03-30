import { Component, input } from '@angular/core';
import { Product } from '../../../model/product.type';
import { ProductListItemComponent } from "../product-list-item/product-list-item.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductListItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = input(<Array<Product>>[]);
}
