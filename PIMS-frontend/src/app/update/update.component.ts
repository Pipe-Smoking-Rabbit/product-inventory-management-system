import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';

@Component({
  selector: 'app-update',
  imports: [RouterLink, ProductFormComponent],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {}
