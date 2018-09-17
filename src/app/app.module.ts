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
import {HttpClientModule} from '@angular/common/http';
import {PizzasService} from './pizzas/pizzas.service';
import {BasketService} from './basket/basket.service';
import { ListComponent } from './list/list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { SummaryComponent } from './summary/summary.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginComponent } from './login/login.component';
import { PastaDetailComponent } from './pastas/pasta-detail/pasta-detail.component';


const appRoutes: Routes = [
  // { path: '',
  //   redirectTo: 'pizzas',
  //   pathMatch: 'full'
  // },
  { path: 'pizzas',
    component: PizzasComponent,
    data: {title: 'Pizzas List'}
  },
  { path: 'pizzas/:id',
    component: PizzaDetailComponent,
    data: {title: 'Overview'},
    // canActivate: [AdminGuard]
  },
  { path: 'pastas',
    component: PastasComponent,
    data: {title: 'Pastas List'}
  },
  { path: 'pastas/:id',
    component: PastaDetailComponent,
    data: {title: 'Overview2'},
    canActivate: [AdminGuard]
  },
  { path: 'summary',
    component: SummaryComponent,
    data: {title: 'Summary'}
  },
  { path: 'list',
    component: ListComponent,
    data: {title: 'List'},
    canActivate: [AdminGuard]
  },
  { path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  { path: 'orders',
    component: OrdersComponent,
    data: {title: 'Orders'},
    canActivate: [AdminGuard]
  },
  { path: 'orders/:id',
    component: OrderDetailsComponent,
    data: {title: 'Overview3'},
    canActivate: [AdminGuard]
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
    ListComponent,
    OrdersComponent,
    OrderDetailsComponent,
    SummaryComponent,
    LoginComponent,
    PastaDetailComponent,
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
    AdminGuard,
    LoginComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
