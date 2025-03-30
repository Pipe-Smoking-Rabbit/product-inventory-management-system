import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../model/product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  http = inject(HttpClient);
  getProducts () {
    const url = `https://localhost:7057/Products`
    return this.http.get<Array<Product>>(url);
  }
}
