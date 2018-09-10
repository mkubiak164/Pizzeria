import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `
    <h1>Pizzeria</h1>
    <nav>
      <a routerLink="/pizzas" routerLinkActive="active">Pizze </a>
      <a routerLink="/pastas" routerLinkActive="active"> Makarony</a>
      <span>
      <a routerLink="/basket" routerLinkActive="active">Koszyk</a>
        <h4>Liczba elementów: </h4>
      </span>
    </nav>
    <router-outlet></router-outlet>
  `
})


export class AppComponent {
  constructor(private http: HttpClient) { }
  httpdata;



  title = 'Pizzeria';
}
