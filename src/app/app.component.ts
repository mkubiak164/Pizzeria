import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import {BasketComponent} from './basket/basket.component';
import {BasketService} from './basket.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `
    <header>Pizzeria</header>
    <nav>
      <a routerLink="/pizzas" routerLinkActive="active">Pizze </a>
      <a routerLink="/pastas" routerLinkActive="active"> Makarony</a>
      <span>
      <a routerLink="/basket" routerLinkActive="active">Przejdź do zamówienia</a>
        <h4>Liczba elementów w koszyku: {{countBasketSize()}}</h4>
      </span>
    </nav>
    <router-outlet></router-outlet>
  `
})


export class AppComponent {
  constructor(private http: HttpClient, private basketService: BasketService) { }
  httpdata;
  title = 'Pizzeria';

  countBasketSize(): number {
    return this.basketService.countBasket();
  }
}
