import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
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
import {PizzasService} from './pizzas.service';
import {BasketService} from './basket.service';
import { ListComponent } from './list/list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SummaryComponent } from './summary/summary.component';
// import {RoleGuard} from './role-guard';


const appRoutes: Routes = [
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
    data: {title: 'List'}
  },
  { path: 'orders',
    component: OrdersComponent,
    data: {title: 'Orders'}
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
  providers: [PizzasService, BasketService, BasketComponent, AdressComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
