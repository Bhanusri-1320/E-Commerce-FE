import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [IonicModule, MatCardModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: any;
  flag = true;
  constructor(private router: Router, private productService: ProductService, private snackBar: MatSnackBar
  ) { }

  productClicked() {
    // console.log('Product clicked:', this.product);
    this.router.navigate(['/product-details', this.product.id]);
  }
  toggleDescription() {
    this.flag = !this.flag;
  }
  addToCart() {
    console.log('Add to cart clicked for product:');
    // this.productService.addToCart(this.product);
    // this.router.navigate(['cart', this.product.id]);
    this.productService.addToCart(this.product).subscribe({
      next: res => { this.showConfirmation(); },
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
  deleteProduct() {
    console.log('Delete product clicked for product:', this.product);
    this.productService.deleteProduct(this.product.id).subscribe({
      next: (res) => console.log('Deleted successfully', res),
      error: (err) => console.error('Delete failed', err)
    });
  }
}
