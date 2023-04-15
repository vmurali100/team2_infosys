import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './addproduct/addproduct.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}
  url = 'http://localhost:3000/products/';
  getProducts() {
    return this._http.get(this.url);
  }
  getProductById(id: Number) {
    return this._http.get(this.url + id);
  }
  addProduct(product: Product) {
    return this._http.post(this.url, product);
  }
  updateProduct(product: Product) {
    return this._http.put(this.url + product.id, product);
  }
  deleteProduct(product: Product) {
    return this._http.delete(this.url + product.id);
  }
}
