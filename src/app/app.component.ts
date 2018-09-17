import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BasketService} from './basket/basket.service';
import {Router} from '@angular/router';
import {AdminService} from './services/admin.service';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `
    <header>Pizzeria<button *ngIf="!adminService.isAdmin; else elseBlock" (click)="openLogin()">Zaloguj</button>
    <ng-template #elseBlock>
      <button (click)="loginService.logout()">Wyloguj</button>
    </ng-template>
    </header>
    <nav>
      <a *ngIf="!adminService.isAdmin" routerLink="/pizzas" routerLinkActive="active">Pizze </a>
      <a *ngIf="!adminService.isAdmin" routerLink="/pastas" routerLinkActive="active"> Makarony</a>
      <a *ngIf="adminService.isAdmin" routerLink="/list" routerLinkActive="active">Lista dań</a>
      <a *ngIf="adminService.isAdmin" routerLink="/orders" routerLinkActive="active">Lista zamówień</a>
      <div>
      <a *ngIf="!adminService.isAdmin" routerLink="/summary" routerLinkActive="active">Zamówienie</a>
        <h4 *ngIf="!adminService.isAdmin">Produktów w koszyku: {{ basketService.countBasket() }}</h4>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  constructor(private http: HttpClient,
              public basketService: BasketService,
              public loginService: LoginService,
              private router: Router,
              public adminService: AdminService) { }

  openLogin() {
    this.router.navigateByUrl('/login');
  }

}
