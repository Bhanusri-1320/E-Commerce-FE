import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { IonCard } from "@ionic/angular/standalone";

@Component({
  selector: 'app-cart',
  imports: [IonCard, ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
   id!: string;
   product:any;
   constructor(private route:ActivatedRoute, private productService: ProductService)
   {}
   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
      console.log('CartComponent initialized with ID:', this.id);
      this.getProductDetails(this.id);
    }
   }
   getProductDetails(id:string) {
      this.productService.getProductById(this.id).subscribe(
        (data) => {
          this.product = data;
          console.log('Product Details:', this.product);
        }
      )
   }
}
