import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  constructor(private ps: ProductService) {}
  productList: Product[] = [];
  product: Product = {
    id: '',
    title: '',
    price: 0,
    description: '',
    category: '',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 0,
      count: 100,
    },
  };
  isEdit: boolean = false;
  ngOnInit(): void {
    this.getProducts();
  }
  addProduct() {
    this.ps.addProduct(this.product).subscribe((res: any) => {
      alert('Added successfully!');
      this.productList.push(res);
    });
  }
  updateProduct() {
    this.ps.updateProduct(this.product).subscribe((res: any) => {
      alert('Updated successfully!');
      this.getProducts();
      this.isEdit = !this.isEdit;
    });
  }
  deleteProduct(product: any) {
    this.ps.deleteProduct(product).subscribe((res) => {
      alert('Deleted!');
      this.getProducts();
    });
  }
  editProduct(product: any) {
    console.log('edit', product);
    this.product = JSON.parse(JSON.stringify(product));
    this.isEdit = !this.isEdit;
  }
  getProducts() {
    this.ps.getAllProducts().subscribe((res: any) => {
      console.log('product', res);
      this.productList = res;
      console.log(this.productList)
    });
  }
}
export interface Product {
  id?: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: rating;
}

export interface rating {
  rate: number;
  count: number;
}
