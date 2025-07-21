import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../service/product.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-cart-details',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.scss'
})
export class CartDetailsComponent {
  @Input() product: any;
  @Output() itemSelected = new EventEmitter<any>();
  total: number = 0;

  constructor(private productService: ProductService) { }
  ngOnInit() {
  }

  removeFromCart() {
    this.itemSelected.emit(this.product);
  }


}
