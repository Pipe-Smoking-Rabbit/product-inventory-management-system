import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../model/product.type';
import { ProductListComponent } from './components/product-list/product-list.component';
import { concatMap, last } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productService = inject(ProductsService);
  products = signal<Array<Product>>([]);

  refreshProducts() {
    this.productService.getProducts().subscribe((apiProducts) => {
      this.products.set(apiProducts);
    });
  }

  handleRemoveProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.refreshProducts();
    });
  }

  ngOnInit(): void {
    this.refreshProducts();
  }
}
