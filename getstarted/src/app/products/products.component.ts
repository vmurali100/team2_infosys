import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() newProducts: any[] = [];
  @Output() deleteProduct = new EventEmitter();
  @Output() editProduct = new EventEmitter();
  constructor(private ps: ProductService) {}
  // productList: Product[] = [];
  ngOnInit(): void {}

  handleEdit(product: Product) {
    console.log('handleEdit', product);
    this.editProduct.emit(product);
  }
  handleDelete(product: Product) {
    this.deleteProduct.emit(product);
  }
}
