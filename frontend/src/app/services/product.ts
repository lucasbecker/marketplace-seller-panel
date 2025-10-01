import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductRequest } from '../interfaces/product-request';
import { IProductResponse } from '../interfaces/product-response';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _apiUrl = 'http://localhost:3000/api';

  private readonly _httpClient = inject(HttpClient);

  public create(product: IProductRequest) {
    return this._httpClient.post<IProductResponse>(`${this._apiUrl}/products`, product);
  }
}
