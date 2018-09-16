import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BasketService} from './basket/basket.service';
import {GuardComponent} from './guard/guard.component';
import {LoginComponent} from './login/login.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `
    <header>Pizzeria<button (click)="openLogin()">Zaloguj</button></header>
    <nav>
      <a routerLink="/pizzas" routerLinkActive="active">Pizze </a>
      <a routerLink="/pastas" routerLinkActive="active"> Makarony</a>
      <a *ngIf="isAdmin()" routerLink="/list" routerLinkActive="active">Lista dań</a>
      <a *ngIf="isAdmin()" routerLink="/orders" routerLinkActive="active">Lista zamówień</a>
      <div>
      <a routerLink="/summary" routerLinkActive="active">Zamówienie</a>
        <h4>Produktów w koszyku: {{ basketService.countBasket() }}</h4>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor(private http: HttpClient,
              public basketService: BasketService,
              private guard: GuardComponent,
              private loginComponent: LoginComponent,
              private router: Router) { }

  isAdmin() {
    return this.guard.canActivate;
    // return this.guard.test();
    // return this.guard.change;
  }

  openLogin() {
    this.router.navigateByUrl('/login');
  }

}
