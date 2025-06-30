import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../service/product.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IonCard } from "@ionic/angular/standalone";
import { Router } from '@angular/router';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
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
  private router: Router,
  private snackBar: MatSnackBar
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
    }, error => {
      console.error('Error fetching product details:', error);
    });
  }
  addToCart(product: any) {
    // this.productService.addToCart(product);
    // this.router.navigate(['cart', product.id]);
    this.productService.addToCart(product).subscribe({
  next: res => {this.showConfirmation();},
  error: err => console.error('POST error:', err)
});
  }
  showConfirmation() {
    this.snackBar.open('Product added to cart!', 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }
    Back()
  {
    this.router.navigate(['']);
  }
}
