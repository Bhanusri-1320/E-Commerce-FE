import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ProductComponent } from "../product/product.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [ProductComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  products: any[] = [];
  constructor(private productsService: ProductService, private router: Router) {
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((data: any) => {
      this.products = data;
    });
  }
  cart() {
    this.router.navigate(['cart']);
  }
  goToHome() {
    this.router.navigate(['']);
  }
}
