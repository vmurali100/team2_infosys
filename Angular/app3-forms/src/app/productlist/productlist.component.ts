import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  @Output() handleDelete = new EventEmitter();
  @Output() handleEdit = new EventEmitter()
  @Input() allProducts: Product[] = [];

  deleteProduct(product:Product){
    this.handleDelete.emit(product)
  }
  editProduct(product:Product){
    this.handleEdit.emit(product)
  }

}
