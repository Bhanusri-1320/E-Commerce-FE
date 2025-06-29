import { Component, Input } from '@angular/core';
import { ProductService } from '../service/product.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-cart-details',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.scss'
})
export class CartDetailsComponent {
@Input() product: any;
// product: any;
  constructor(private productService:ProductService) {}
  ngOnInit() {
    // this.getProductDetailsById(this.id);
  }
  // getProductDetailsById(id:any) {
  //   this.productService.getProductById(id).subscribe(
  //     (data) => {
  //       console.log('Product Details cart:', data);
  //       this.product = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching product details:', error);
  //     }
  //   );
  // }
}
