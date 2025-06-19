import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-product',
  imports: [IonicModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: any;
  demoProduct={
    "id": "1",
    "name": "Nike Air Max 270",
    "title": "Breathable Running Shoes",
    "description": "Experience the ultimate in comfort and performance with Nike's signature Air Max cushioning.",
    "price": 119.99,
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4ee1d6f1-5efc-4e2a-84a6-7e40b02de73d/NIKE+ZOOM+VOMERO+5.png",
    "category": "shoes",
    "brand": "Nike",
    "rating": 4.5,
    "stock": 34,
    "createdAt": "2025-06-01T10:00:00Z",
    "isFeatured": true,
    "discount": 10,
    "tags": "running"
  };
  constructor() {
    // This is where you would typically initialize the component
    // For now, we can just log a message to indicate the component is initialized
    console.log('ProductComponent initialized',this.product);
  }
}
