import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
export interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image:null;
  rating:{
    rate:string;
    count:string;
  };
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [];
  isEdit: boolean = false;
  constructor(private productService: ProductsService) {}
  productDetails: Product = {
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image:null,
    rating:{
      rate: '',
      count:''
    },
  };
  createProduct() {
    try {
      this.productService
        .createProduct(this.productDetails)
        .subscribe((response) => {
          this.getLatestProducts();
          this.clearForm();
        });
    } catch (error) {
      console.log(error);
    }
  }

  getLatestProducts() {
    this.productService.getAllProducts().subscribe((response: any) => {
      console.log("response: ",response)
      this.products = response;
    });
  }
  deleteProductDetails(product: Product) {
    this.productService.deleteProduct(product).subscribe(() => {
      this.getLatestProducts();
    });
  }
  editProductDetails(product: Product) {
    this.productDetails = { ...product };
    this.isEdit = !this.isEdit;
  }
  udpateProductDetails() {
    this.productService.updateProduct(this.productDetails).subscribe((res) => {
      this.getLatestProducts();
      this.isEdit = !this.isEdit;
      this.clearForm();
    });
  }
  clearForm() {
    this.productDetails = {
      id: '',
      title: '',
      price: '',
      description: '',
      category: '',
      image:null,
      rating:{
        rate:'',
        count:''
      },
    };
  }
  ngOnInit() {
    this.getLatestProducts();
  }
}
