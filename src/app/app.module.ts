import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaDetailComponent } from './pizzas/pizza-detail/pizza-detail.component';
import { PastasComponent } from './pastas/pastas.component';
import { BasketComponent } from './basket/basket.component';
// @ts-ignore
import { AdressComponent } from './adress/adress.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { DrinksComponent } from './drinks/drinks.component';
import { DishComponent } from './dish/dish.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {PizzasService} from './pizzas/pizzas.service';
import {BasketService} from './basket/basket.service';
import { ListComponent } from './list/list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SummaryComponent } from './summary/summary.component';
import { GuardComponent } from './guard/guard.component';
import { LoginComponent } from './login/login.component';
// import {RoleGuard} from './role-guard';


const appRoutes: Routes = [
  // { path: '',
  //   redirectTo: 'pizzas',
  //   pathMatch: 'full'
  // },
  { path: 'pizzas',
    component: PizzasComponent,
    data: {title: 'Pizzas List'}
  },
  { path: 'pastas',
    component: PastasComponent,
    data: {title: 'Pastas List'}
  },
  { path: 'summary',
    component: SummaryComponent,
    data: {title: 'Summary'}
  },
  { path: 'list',
    component: ListComponent,
    data: {title: 'List'},
    canActivate: [GuardComponent]
  },
  { path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  { path: 'orders',
    component: OrdersComponent,
    data: {title: 'Orders'},
    canActivate: [GuardComponent]
  // },
  // { path: '/admin', component: AdminPanelComponent,
  //   canActivate: [RoleGuard]
  }

];


@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    PizzaDetailComponent,
    PastasComponent,
    BasketComponent,
    AdressComponent,
    DrinksComponent,
    DishComponent,
    ListComponent,
    OrdersComponent,
    OrderDetailsComponent,
    SummaryComponent,
    GuardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),

  ],
  providers: [PizzasService,
    BasketService,
    BasketComponent,
    AdressComponent,
    GuardComponent,
    LoginComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
