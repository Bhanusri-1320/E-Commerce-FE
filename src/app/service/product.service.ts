import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl="https://669a42939ba098ed61fef789.mockapi.io/ECommerce";

  private cartProducts:any=[];

  constructor(private http:HttpClient) { }
  getAllProducts() {
    return this.http.get(this.apiUrl);
  }

  getProductById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`)
  }
  addToCart(product: any) {
    this.cartProducts.push(product);
    console.log('Product added to cart:', product);
  }
  getCartProducts() {
    return this.cartProducts;
  }
}
