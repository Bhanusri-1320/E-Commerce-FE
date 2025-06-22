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
  constructor(private router:Router) {}

  productClicked() {
    // console.log('Product clicked:', this.product);
      this.router.navigate(['/product-details', this.product.id]);
  }
}
