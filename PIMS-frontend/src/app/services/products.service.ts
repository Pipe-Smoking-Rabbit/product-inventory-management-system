import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../model/product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  http = inject(HttpClient);
  baseURL = `http://localhost:5062`;

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
  postProduct(product: Product) {
    const url = this.baseURL + `/Products`;
    return this.http.post(url, product);
  }
}
