import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { ProductService } from '../../services/product';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  imports: [ReactiveFormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  private readonly _productService = inject(ProductService);

  public readonly filterForm = new FormGroup({
    title: new FormControl(''),
    status: new FormControl(''),
  });

  public errorMessage: string = '';

  public products: Array<IProduct> = [];
  public filteredProducts: Array<IProduct> = [];

  ngOnInit() {
    this._productService
      .list()
      .pipe(take(1))
      .subscribe({
        next: ({ data }) => {
          this.products = data;
          this.filteredProducts = data;
        },
        error: ({ error }) => {
          this.errorMessage = error.message || 'Algo inesperado aconteceu!';
        },
      });
  }

  filterProducts() {
    const title = this.filterForm.value.title?.toLocaleLowerCase();
    const status = this.filterForm.value.status?.toLocaleLowerCase();

    this.filteredProducts = this.products.filter(
      (product) =>
        (!title || product.title.toLocaleLowerCase().includes(title)) &&
        (!status || product.status.toLocaleLowerCase().includes(status))
    );
  }

  clearFilter() {
    this.filterForm.reset({ title: '', status: '' });
    this.filterProducts();
  }
}
