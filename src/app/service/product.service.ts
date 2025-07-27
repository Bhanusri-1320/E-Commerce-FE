import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = "https://669a42939ba098ed61fef789.mockapi.io/ECommerce";
  private cartUrl = "https://669a42939ba098ed61fef789.mockapi.io/Cart";

  private cartProducts: any = [];

  constructor(private http: HttpClient) { }
  getAllProducts() {
    // this.cartProducts=this.http.get(this.apiUrl);
    return this.http.get(this.apiUrl);
  }

  getProductById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  // addToCart(product: any) {
  //   let titles = [];
  //   this.getCartProducts().subscribe((data: any) => {
  //     this.cartProducts = data;
  //     titles = this.cartProducts.map((item: any) => item.title);
  //     if (titles.includes(product.title)) {
  //       console.log("Product already exists in cart", product.title);
  //       product.quantity += 1;
  //       return;
  //     }
  //   });
  //   console.log("Adding product to cart:", product);
  //   return this.http.post(this.cartUrl, product)
  // }


  addToCart(product: any) {
    this.getCartProducts().subscribe((data: any) => {
      this.cartProducts = data;
      const titles = this.cartProducts.map((item: any) => item.title);

      if (titles.includes(product.title)) {
        console.log("Product already exists in cart:", product.title);

        const existingProduct = this.cartProducts.find((item: any) => item.title === product.title);
        if (existingProduct) {
          existingProduct.quantity += 1;

          this.http.put(`${this.cartUrl}/${existingProduct.id}`, existingProduct)
            .subscribe(() => {
              console.log("Product quantity updated:", existingProduct);
            });
        }
      } else {
        product.quantity = 1;
        this.http.post(this.cartUrl, product)
          .subscribe(() => {
            console.log("New product added to cart:", product);
          });
      }
    });
  }


  getCartProducts() {
    return this.http.get(this.cartUrl);
  }

  removeFromCart(id: string) {
    return this.http.delete(`${this.cartUrl}/${id}`);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateProduct(id: string, product: any) {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  addProduct(product: any) {
    return this.http.post(this.apiUrl, product);
  }

  countCartItems(): number {
    let count = 0;
    this.getCartProducts().subscribe((data: any) => {
      this.cartProducts = data;
    });
    for (let i = 0; i < this.cartProducts.length; i++) {
      count++;
    }
    return count;
  }
}
