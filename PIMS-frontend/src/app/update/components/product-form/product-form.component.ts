import { Component, inject, OnInit, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../model/product.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productService = inject(ProductsService);
  id = signal('');
  productForm = new FormGroup({
    productName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    price: new FormControl('', [Validators.required, Validators.min(0.01)]),
  });

  submitted = false;

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
    this.submitted = true;
    if (this.productForm.invalid) {
      this.flashInvalidFields();
      return;
    }

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

  flashInvalidFields() {
    Object.keys(this.productForm.controls).forEach((key) => {
      const control = this.productForm.get(key) as AbstractControl;
      if (control.invalid) {
        const element = document.getElementById(key) as HTMLElement;
        element.classList.add('flash-error');
        setTimeout(() => element.classList.remove('flash-error'), 1000);
      }
    });
  }

  isInvalid(formControlName: string): boolean {
    const control = this.productForm.get(formControlName) as AbstractControl;
    return control.invalid && (control.touched || this.submitted);
  }
}
