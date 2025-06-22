import { Component, Input } from '@angular/core';
import {  IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent { 
  @Input() product: any;
  flag=true;
  constructor(private router:Router) {}

  productClicked() {
    // console.log('Product clicked:', this.product);
      this.router.navigate(['/product-details', this.product.id]);
  }
  toggleDescription()
  {
    this.flag = !this.flag;
  }
   addToCart() {
    console.log('Add to cart clicked for product:');
    this.router.navigate(['cart', this.product.id]);
  }
}
