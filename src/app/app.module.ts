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


const appRoutes: Routes = [
  { path: 'pizzas',
    component: PizzasComponent,
    data: {title: 'Pizzas List'}
  },
  { path: 'pastas',
    component: PastasComponent,
    data: {title: 'Pastas List'}
  },
  { path: 'basket',
    component: BasketComponent,
  data: {title: 'Basket'}
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
