import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { Product } from '../../../model/product.type';
import { RouterLink } from '@angular/router';
import { CtaButtonComponent } from '../../../components/cta-button/cta-button.component';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-list-item',
  imports: [RouterLink, CtaButtonComponent],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css',
})
export class ProductListItemComponent {
  @Output() deleteId = new EventEmitter<number>();
  productService = inject(ProductsService);
  product = input(<Product>{});

  deleteProduct(id: number) {
    this.deleteId.emit(id);
  }
}
