import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../add-product/add-product.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() productList: Product[] = [];
  @Output() deleteProduct = new EventEmitter();
  @Output() editProduct = new EventEmitter();
  constructor(private ps: ProductService) {}
  ngOnInit(): void {}

  handleEdit(product: Product) {
    this.editProduct.emit(product);
  }
  handleDelete(product: Product) {
    this.deleteProduct.emit(product);
  }
}
