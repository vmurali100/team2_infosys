import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './add-product/add-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  url = 'http://localhost:3000/products/';

  getAllProducts(){
    return this._http.get(this.url)
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
