import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartDetailsComponent } from "../cart-details/cart-details.component";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-cart',
  imports: [CartDetailsComponent,MatButtonModule, MatCardModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
   products:any[] = [];
   constructor(private route:ActivatedRoute, private productService: ProductService,private router:Router)
   {}
   ngOnInit() {
    this.getCartDetails();
   }
  getCartDetails() {
    this.productService.getCartProducts().subscribe((data:any) => {
      this.products = data;
    }, (error) => {
      console.error('Error fetching cart products:', error);
    });
  }
  Back()
  {
    this.router.navigate(['']);
  }
}
