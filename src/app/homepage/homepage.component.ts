import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-homepage',
  imports: [ProductComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  products:any[]=[];
  constructor(private productsService:ProductService)
  {
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((data:any)=>{
      this.products=data;
    });
  }

}
