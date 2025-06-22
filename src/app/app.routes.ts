import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
   { path: '', component: HomepageComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: '**', redirectTo: '' }
];
