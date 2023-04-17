import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  
  getAllProducts() {
    return this._http.get('http://localhost:3000/products');
  }
  createProduct(product: Product) {
    return this._http.post('http://localhost:3000/products', product)    
  }
  updateProduct(product:Product) {
    return this._http.put('http://localhost:3000/products/' + product.id,product)
  }
  deleteProduct(product: Product) {
    return this._http.delete('http://localhost:3000/products/' + product.id);
  }
}
