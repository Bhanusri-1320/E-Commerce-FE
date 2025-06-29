import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../service/product.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IonCard } from "@ionic/angular/standalone";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [IonCard, MatCardModule, MatButtonModule,IonCard],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  product:any;
 constructor(private route: ActivatedRoute,
  private productService: ProductService,
  private router: Router
 ) {
    const id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
 const id= this.route.snapshot.paramMap.get('id');
  if (id) {
  console.log('ProductDetailsComponent initialized');
  console.log(this.route.snapshot.paramMap.get('id'));
  this.loadProductDetails(id);
  }
  }

  loadProductDetails(id: string) {
    this.productService.getProductById(id).subscribe((data:any) => {
      this.product = data;
      console.log('Product Details:', this.product);
    }, error => {
      console.error('Error fetching product details:', error);
    });
  }
  addToCart(product: any) {
    console.log('Add to cart clicked for product:', product);
    this.productService.addToCart(product);
    // this.router.navigate(['cart', product.id]);
  }
}
