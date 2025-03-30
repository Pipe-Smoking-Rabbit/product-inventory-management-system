import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../model/product.type';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productService = inject(ProductsService);
  products = signal<Array<Product>>([]);

  ngOnInit(): void {
    this.productService.getProducts().subscribe((apiProducts) => {
      console.log(apiProducts);
      this.products.set(apiProducts);
    });
  }
}
