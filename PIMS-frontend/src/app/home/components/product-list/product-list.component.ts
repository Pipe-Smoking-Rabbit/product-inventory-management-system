import { Component, EventEmitter, input, Output, output } from '@angular/core';
import { Product } from '../../../model/product.type';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductListItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Output() forwardDeleteId = new EventEmitter<number>();
  products = input(<Array<Product>>[]);

  handleForwardDeleteId(id: number) {
    this.forwardDeleteId.emit(id);
  }
}
