import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path:'cart',component:CartComponent },
  { path: '**', component:PageNotFoundComponent }
];
