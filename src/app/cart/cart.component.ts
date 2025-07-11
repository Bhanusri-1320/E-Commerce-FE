import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CartDetailsComponent } from "../cart-details/cart-details.component";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  standalone: true,
  selector: 'app-cart',
  imports: [CartDetailsComponent, MatButtonModule, MatCardModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  products: any[] = [];
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router,  private snackBar: MatSnackBar
) { }
  ngOnInit() {
    this.getCartDetails();
  }
  getCartDetails() {
    this.productService.getCartProducts().subscribe((data: any) => {
      this.products = data;
    }, (error) => {
      console.error('Error fetching cart products:', error);
    });
  }
  Back() {
    this.router.navigate(['']);
  }
  handleItem(item: any) {
    this.productService.removeFromCart(item.id).subscribe({
      next: res => {
        this.showConfirmation();
        this.loadCart();
      },
      error: err => console.error('Error removing product from cart:', err)
    });
  }
  loadCart() {
    this.productService.getCartProducts().subscribe({
      next: (products: any) => {
        this.products = products;
      },
      error: (err) => {
        console.error('Error loading cart:', err);
      }
    });
  }
  showConfirmation() {
    this.snackBar.open('Product removed from cart!', 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

}
