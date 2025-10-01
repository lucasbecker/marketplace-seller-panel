import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { take } from 'rxjs';

import { ProductService } from '../../services/product';
import { IProductRequest } from '../../interfaces/product-request';

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css',
})
export class NewProduct {
  private _productService = inject(ProductService);

  public form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  public imageBase64 = '';

  public errorMessage = '';

  public successMessage = '';

  public onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files.item(0);

      if (file) this.convertFileToBase64(file);
    }
  }

  private convertFileToBase64(file: File) {
    const reader = new FileReader();

    reader.onload = (progressEvent) => {
      const fileBase64 = progressEvent.target?.result as string;

      this.imageBase64 = fileBase64;
    };

    reader.onerror = (_progressEvent) => {
      this.imageBase64 = '';
    };

    reader.readAsDataURL(file);
  }

  public submit() {
    if (this.form.invalid || !this.imageBase64) return;

    const product: IProductRequest = {
      title: this.form.get('title')?.value as string,
      price: this.form.get('price')?.value as number,
      category: this.form.get('category')?.value as string,
      description: this.form.get('description')?.value as string,
      imageBase64: this.imageBase64,
    };

    this._productService
      .create(product)
      .pipe(take(1))
      .subscribe({
        next: ({ message }) => {
          this.errorMessage = '';
          this.successMessage = message;
        },
        error: ({ error }) => {
          this.successMessage = '';
          this.errorMessage = error.message ?? 'Algo inesperado aconteceu!';
        },
      });
  }

  public cancel() {
    this.imageBase64 = '';
    this.form.reset({ title: '', price: 0, category: '', description: '' });
  }
}
