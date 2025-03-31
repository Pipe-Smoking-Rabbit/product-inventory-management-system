import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../model/product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http = inject(HttpClient);
  baseURL = `https://localhost:7057`;

  getProducts() {
    const url = this.baseURL + `/Products`;
    return this.http.get<Array<Product>>(url);
  }
  editProduct(product: Product) {
    const url = this.baseURL + `/Products/${product.id}`;
    return this.http.put(url, product);
  }
  deleteProduct(id: number) {
    const url = this.baseURL + `/Products/${id}`;
    return this.http.delete(url);
  }
}
