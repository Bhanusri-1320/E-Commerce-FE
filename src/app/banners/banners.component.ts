import { Component } from '@angular/core';

@Component({
  selector: 'app-banners',
  imports: [],
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.scss'
})
export class BannersComponent {
  banners: string[] = [
    "https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg",
    "https://images.all-free-download.com/images/thumbjpg/ecommerce_website_banner_template_shoppers_sketch_6920121.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg",
    "https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-banner-template_120329-5177.jpg?semt=ais_hybrid&w=740",
  ]
  currenBanner = this.banners[0];
  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 4300);
  }

  nextSlide(): void {
    const currentIndex = this.banners.indexOf(this.currenBanner);
    const nextIndex = (currentIndex + 1) % this.banners.length;
    this.currenBanner = this.banners[nextIndex];
  }
  previousSlide(): void {
    const currentIndex = this.banners.indexOf(this.currenBanner);
    const previousIndex = (currentIndex - 1 + this.banners.length) % this.banners.length;
    this.currenBanner = this.banners[previousIndex];
  }
}
