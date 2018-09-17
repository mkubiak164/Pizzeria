import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BasketService} from './basket/basket.service';
import {AdminGuard} from './guards/admin.guard';
import {LoginComponent} from './login/login.component';
import {Router} from '@angular/router';
import {AdminService} from './services/admin.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `
    <header>Pizzeria<button *ngIf="!adminService.isAdmin; else elseBlock" (click)="openLogin()">Zaloguj</button>
    <ng-template #elseBlock>
      <a class="welcome">Jesteś zalogowany</a>
    </ng-template>
    </header>
    <nav>
      <a routerLink="/pizzas" routerLinkActive="active">Pizze </a>
      <a routerLink="/pastas" routerLinkActive="active"> Makarony</a>
      <a *ngIf="adminService.isAdmin" routerLink="/list" routerLinkActive="active">Lista dań</a>
      <a *ngIf="adminService.isAdmin" routerLink="/orders" routerLinkActive="active">Lista zamówień</a>
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
              private loginComponent: LoginComponent,
              private router: Router,
              public adminService: AdminService) { }

  openLogin() {
    this.router.navigateByUrl('/login');
  }

}
