import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../model/product.type';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CtaButtonComponent } from '../components/cta-button/cta-button.component';
import { RouterLink } from '@angular/router';
import { LoadingListComponent } from '../components/loading-list/loading-list.component';

@Component({
  selector: 'app-home',
  imports: [
    ProductListComponent,
    CtaButtonComponent,
    RouterLink,
    LoadingListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productService = inject(ProductsService);
  products = signal<Array<Product>>([]);

  loading = true;

  refreshProducts() {
    this.loading = true;
    console.log(this.loading);
    this.productService.getProducts().subscribe((apiProducts) => {
      this.products.set(apiProducts);
      this.loading = false;
      console.log(this.loading);
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
