import { Component, input } from '@angular/core';
import { Product } from '../../../model/product.type';
import { RouterLink } from '@angular/router';
import { CtaButtonComponent } from '../../../components/cta-button/cta-button.component';

@Component({
  selector: 'app-product-list-item',
  imports: [RouterLink, CtaButtonComponent],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css',
})
export class ProductListItemComponent {
  product = input(<Product>{});
}
