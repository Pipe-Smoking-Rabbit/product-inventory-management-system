import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../model/product.type';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productService = inject(ProductsService);
  id = signal('');
  productForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Set query param values if available to pre-populate form
    this.route.queryParams.subscribe((params) => {
      this.id.set(params['id'] || '');
      this.productForm.setValue({
        productName: params['productName'] || '',
        quantity: params['quantity'] || '',
        price: params['price'] || '',
      });
    });
  }

  onSubmit() {
    const formData = this.productForm.value as {
      productName: string;
      quantity: string;
      price: string;
    };

    const updatedProduct = <Product>{
      id: Number(this.id()),
      productName: formData.productName,
      quantity: Number(formData.quantity),
      price: Number(formData.price),
    };

    // if id is present in query then edit product, otherwise create new product
    const httpCall = this.id()
      ? this.productService.editProduct(updatedProduct)
      : this.productService.postProduct(updatedProduct);

    httpCall.subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
