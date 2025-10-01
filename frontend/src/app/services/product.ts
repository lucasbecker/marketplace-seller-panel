import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { IProductRequest } from '../interfaces/product-request';
import { IProductResponse } from '../interfaces/product-response';
import { IProductsResponse } from '../interfaces/products-response';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _apiUrl = environment.apiUrl;

  private readonly _httpClient = inject(HttpClient);

  public create(product: IProductRequest) {
    return this._httpClient.post<IProductResponse>(`${this._apiUrl}/products`, product);
  }

  list() {
    return this._httpClient.get<IProductsResponse>(`${this._apiUrl}/products`);
  }
}
