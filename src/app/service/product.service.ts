import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl="https://669a42939ba098ed61fef789.mockapi.io/ECommerce";
  private cartUrl = "https://669a42939ba098ed61fef789.mockapi.io/Cart";

  private cartProducts:any=[];

  constructor(private http:HttpClient) { }
  getAllProducts() {
    return this.http.get(this.apiUrl);
  }

  getProductById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`)
  }
  addToCart(product: any) {
    return this.http.post(this.cartUrl, product)
  }
  getCartProducts() {
    return this.http.get(this.cartUrl);
  }
  removeFromCart(id: string) {
    return this.http.delete(`${this.cartUrl}/${id}`);
  }
}
