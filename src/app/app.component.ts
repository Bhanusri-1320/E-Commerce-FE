import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { routes } from './app.routes';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}
