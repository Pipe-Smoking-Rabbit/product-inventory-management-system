import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CtaButtonComponent } from "../components/cta-button/cta-button.component";

@Component({
  selector: 'app-update',
  imports: [RouterLink, ProductFormComponent, CtaButtonComponent],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {}
